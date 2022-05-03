import fs from "fs-extra";
import { default as buildSideBar } from "./buildSideBar.js";
import { default as index } from "../templates/index.js";
import shell from "shelljs";

const buildIndex = (fileMap, config) => {
  const sideBar = buildSideBar(fileMap);
  fs.writeFileSync(
    `${config.build.target}/index.html`,
    index(config, sideBar),
    (e) => {
      if (e) throw e;
      shell.exec(`echo index.html was created successfully`);
    }
  );
};

export default buildIndex;
