import pkg from "@babel/parser";
const { parse } = pkg;
import fs from "fs-extra";

const generateAst = (
  filePath,
  config = { sourceType: "module" }
) => {
  const file = fs.readFileSync(filePath, "utf8");
  const ast = parse(file, config);
  return ast;
};

export default generateAst;
