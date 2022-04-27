import pkg from "fs-extra";
const { readdirSync, statSync } = pkg;
import * as path from "path";

/**
 * walk recursively in directory.
 * @param {string} source - target directory path.
 * @param {function(entryPath: string)} callback - callback for each file.
 */
const recursivePathResolver = (source, callback) => {
  const entries = readdirSync(source);
  entries.forEach((entry) => {
    const entryPath = path.resolve(source, entry);
    const stat = statSync(entryPath);
    if (stat.isFile()) {
      callback(entryPath, entry);
    } else if (stat.isDirectory()) {
      recursivePathResolver(entryPath, callback);
    }
  });
};

export default recursivePathResolver;
