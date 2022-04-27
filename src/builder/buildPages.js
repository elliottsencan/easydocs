import fs from "fs-extra";
import { default as buildSideBar } from "./buildSideBar.js";
import { default as page } from "../templates/page.js";
import shell from "shelljs";

const buildIndex = (fileMap, config) => {
  const sideBar = buildSideBar(fileMap, "pages");

  for (const file in fileMap) {
    const content = fileMap[file];
    fs.writeFileSync(
      `${config.build.target}/pages/${file}.html`,
      page(config, content, sideBar),
      (e) => {
        if (e) throw e;
        shell.exec(`echo ${file}.html was created successfully`);
      }
    );
  }
};

export default buildIndex;
