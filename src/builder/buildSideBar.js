import { default as sideBarItem } from "../templates/sidebarItem.js";
import { default as sideBar } from "../templates/sideBar.js";

const buildSideBar = (fileMap) => {
  let sideBarItems = ``;
  for (let file in fileMap) {
    let context = {
      id: `${file}`,
      title: `${fileMap[file].fileName}`,
      href: `pages/${file}.html`,
    };
    sideBarItems += sideBarItem(context);
  }
  return sideBar(sideBarItems);
};

export default buildSideBar;
