const axios = require("axios");
const cheerio = require("cheerio");
const getAllProducts = async (url, num, selector, bigArr) => {
  const arr = [];
  try {
    const response = await axios.get(url + num);
    const html = response.data;
    const $ = cheerio.load(html);

    $(selector).each((_id, element) => {
      const product = $(element);
      const outOfStock = product.find("div.bdg _oos _xs").text();
      if (!outOfStock) {
        const link = product.attr("href");
        const href = "https://www.jumia.com.eg" + link;
        const title = product.find("h3.name").text();
        const price = product.find("div.prc").text();
        const img = product.find("img.img").attr("data-src");
        if (title !== "") {
          arr.push({ title, href, price, img });
        }
      }
    });

    if (arr.length > 0) {
      bigArr.push(...arr);
      return getAllProducts(url, num + 1, selector, bigArr);
    }
    return bigArr;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllProducts };
