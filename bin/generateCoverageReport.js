#! /usr/bin/env node
import * as path from "path";
import fs from "fs-extra";
import { generateCoverageReportFromTarget } from "../index.js";
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
    console.log("Error finding .easydocsconfig.json: ");
  }
  return null;
};

const init = () => {
  shell.exec("echo Easydoc: Generating coverage report...");
  const config = loadConfigFile() || DEFAULT_CONFIG;
  generateCoverageReportFromTarget(config);
  shell.exec("echo Done! Enjoy");
};

init();
