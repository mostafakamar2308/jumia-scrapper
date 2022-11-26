const furnitureData = require("./data/officeFurniture.json");
const fs = require("fs");
const path = require("path");

const trashCans = [];
const desks = [];
const shelves = [];
const chairs = [];
const storages = [];
const tables = [];

furnitureData.forEach((product) => {
  const title = product.title;
  if (
    title.toLocaleLowerCase().includes("disk") ||
    title.toLocaleLowerCase().includes("desk")
  ) {
    product.description = "A great desk to use for different jobs";
    desks.push(product);
  }
  if (title.toLocaleLowerCase().includes("table")) {
    product.description = "A great table to use for different jobs";
    tables.push(product);
  }
  if (title.toLocaleLowerCase().includes("chair")) {
    product.description = "A comfortable chair to sit on";
    chairs.push(product);
  }

  if (
    title.toLocaleLowerCase().includes("shelves") ||
    title.toLocaleLowerCase().includes("shlef")
  ) {
    product.description = "A good shelf to Store your valuables";
    shelves.push(product);
  }
  if (title.toLocaleLowerCase().includes("storage")) {
    product.description =
      "A complete storage unit for every thing you want to hide";
    storages.push(product);
  }
  if (title.toLocaleLowerCase().includes("trash")) {
    product.description = "A good looking trash can";
    trashCans.push(product);
  }
});

const allArr = {
  chairs,
  trashCans,
  desks,
  shelves,
  storages,
  tables,
};

fs.writeFileSync("newFurniture.json", JSON.stringify(allArr), "utf8");
