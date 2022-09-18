const { getAllProducts } = require("../fetchFn");

// const fetchAllPhones = async (num) => {
//   const selector = "a.core";
//   const phones = [];

//   const url = "https://www.jumia.com.eg/smartphones/?page=";
//   let num = 1;
//   try {
//     let newArr = [];
//     const respose = await axios.get(url + num);
//     const html = respose.data;
//     const $ = cheerio.load(html);

//     $(`${selector}`).each((_id, element) => {
//       const phone = $(element);
//       const link = phone.attr("href");
//       const outOfStock = phone.find("div.bdg _oos _xs").text();
//       if (!outOfStock) {
//         const href = "https://www.jumia.com.eg" + link;
//         const title = phone.find("h3.name").text();
//         const price = phone.find("div.prc").text();
//         const img = phone.find("img.img").attr("data-src");
//         newArr.push({ title, href, price, img });
//       }
//     });

//     if (newArr.length > 0) {
//       phones.push(...newArr);
//       num++;
//       fetchAllPhones();
//     } else {
//       let finalArr = phones.filter((phone) => phone.title != "");
//       console.log(finalArr.length);
//       return finalArr;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const getPhones = async (req, res) => {
  const { page } = req.query;
  const phones = [];
  const phonesArr = await getAllProducts(
    "https://www.jumia.com.eg/smartphones/?page=",
    page || 1,
    "a.core",
    phones
  );
  res.status(200).json({ nbHits: phones.length, phonesArr });
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
  res.status(200).json({ nbHits: computers.length, computersArr });
};

module.exports = { getPhones, getGroceries, getComputers };
