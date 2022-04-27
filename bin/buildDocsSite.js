#! /usr/bin/env node
import * as path from "path";
import fs from "fs-extra";
import { generateDocs } from "../index.js";
import { default as buildIndex } from "../src/builder/index.js";
import { default as buildPages } from "../src/builder/buildPages.js";
import shell from "shelljs";

const CONFIG_FILE_PATH = "./.easydocsconfig.json";

const DEFAULT_CONFIG = {
  build: {
    source: "./src",
    target: "./docs",
  },
  coverage: {
    required: ["FunctionDeclaration"],
    analysisLevel: 1,
  },
};

const loadConfigFile = () => {
  try {
    const configFilePath = path.resolve(CONFIG_FILE_PATH);
    const configJSON = fs.readFileSync(configFilePath, { encode: "utf8" });
    const config = JSON.parse(configJSON);
    return config;
  } catch (error) {
    console.log("Error finding easydocsconfig.json: ");
  }
  return null;
};

//todo fix race condition in build scripts
const init = () => {
  shell.exec("echo Easydoc: creating doc site...");
  const config = loadConfigFile() || DEFAULT_CONFIG;
  const fileMap = generateDocs(config);
  fs.mkdirSync(`${config.build.target}`, { recursive: true });
  fs.mkdirSync(`${config.build.target}/pages`, { recursive: true });
  buildIndex(fileMap, config);
  buildPages(fileMap, config);
  shell.exec("echo Done! Enjoy");
  shell.exec(`open ./${config.build.target}/index.html`);
};

init();
