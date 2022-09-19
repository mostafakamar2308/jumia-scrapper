const { getAllProducts } = require("../fetchFn");
const fs = require("fs");
const path = require("path");

const writeData = (data, fileName) => {
  const arrString = JSON.stringify(data);
  fs.writeFile(
    path.join(__dirname, "..", "data", `${fileName}.json`),
    arrString,
    "utf8",
    (err) => {
      if (err) console.log(err);
    }
  );
};

const getPhones = async (req, res) => {
  const { page } = req.query;
  const phones = [];
  const phonesArr = await getAllProducts(
    "https://www.jumia.com.eg/smartphones/?page=",
    page || 1,
    "a.core",
    phones
  );
  //   writeData(phonesArr, "../phones.json");
  //   fs.writeFileSync("", JSON.stringify({ phonesArr: phonesArr }));
  writeData(phonesArr, "phones");
  return res.status(200).json({ nbHits: phones.length, phonesArr });
};

const getGroceries = async (req, res) => {
  const { page } = req.query;
  const groceries = [];
  const groceriesArr = await getAllProducts(
    "https://www.jumia.com.eg/groceries/?page=",
    page || 1,
    "a.core",
    groceries
  );
  writeData(groceriesArr, "groceries");
  res.status(200).json({ nbHits: groceries.length, groceriesArr });
};

const getComputers = async (req, res) => {
  const { page } = req.query;
  const computers = [];
  const computersArr = await getAllProducts(
    "https://www.jumia.com.eg/computers-tablets/?page=",
    page || 1,
    "a.core",
    computers
  );
  writeData(computersArr, "computers");
  res.status(200).json({ nbHits: computers.length, computersArr });
};
("");

const getOfficeFurniture = async (req, res) => {
  const { page } = req.query;
  const office = [];
  const officeArr = await getAllProducts(
    "https://www.jumia.com.eg/home-office-furniture/?page=",
    page || 1,
    "a.core",
    office
  );
  writeData(officeArr, "officeFurniture");
  res.status(200).json({ nbHits: office.length, officeArr });
};

module.exports = { getPhones, getGroceries, getComputers, getOfficeFurniture };
