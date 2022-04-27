import { default as generateAst } from "./src/parser/generateAst.js";
import { default as recursivePathResolver } from "./src/utils/recursivePathResolver.js";
import { default as processComments } from "./src/parser/processComments.js";
import { default as generateCoverageReportHashFromAst } from "./src/parser/generateCoverageReportHashFromAst.js";
import * as path from "path";
import { default as kebabize } from "./src/utils/kebabize.js";

const generateDocs = (config) => {
  const fileMap = {};
  const { build } = config;
  const { source } = build;
  recursivePathResolver(source, (filePath, fileName) => {
    const { comments } = generateAst(filePath);
    const fileNameWithoutExtension = kebabize(path.parse(fileName).name);
    fileMap[fileNameWithoutExtension] = {
      fileName,
      ...processComments(comments),
    };
  });
  return fileMap;
};

const generateCoverageReportFromTarget = (config) => {
  const fileMap = {};
  const { build } = config;
  const { source} = build;
  recursivePathResolver(source, (filePath, fileName) => {
    const ast = generateAst(filePath);
    const coverageReport = generateCoverageReportHashFromAst(ast, config);
    fileMap[fileName] = coverageReport;
  });

  console.log(`-----------Coverage of Pure JS Files------------`);
  console.table(fileMap);
};

export { generateDocs, generateCoverageReportFromTarget };
