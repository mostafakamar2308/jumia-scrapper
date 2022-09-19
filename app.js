const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const scrappingRoute = require("./routes/phonesRoute");

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());

app.use(express.json());
app.use("/api/v1", scrappingRoute);
app.get("/", (req, res) => {
  res.send(
    `
    <div style="color:white; background:black; height:calc(100vh - 3rem); font-size:2rem; text-align:center; padding:1rem 2rem;">
    <h1>Jumia Scrapper</h1>

    <p>to reach any of the available lists go to => localhost:5000/api/v1/"listName", or Click on any of the following links</p>
    <h2>Available Lists</h2>
            <ul>
              <li>
                <a style="color: green" href="http://localhost:5000/api/v1/computers" target="_blank">
                  Computers
                  </a>
                  </li>
                  <li>
                <a style="color: green" href="http://localhost:5000/api/v1/phones" target="_blank">
                Phones
                </a>
                </li>
                <li>
                <a style="color: green" href="http://localhost:5000/api/v1/groceries" target="_blank">
                Groceries
                </a>
                </li>
                <li>
                <a style="color: green" href="http://localhost:5000/api/v1/officeFurniture" target="_blank">
                officeFurniture
                </a>
                </li>
                
                </ul>
                
                
                <p style="color: red;">Please Stay patient, while the data is being scrapped specially when you try to get to the groceries list &#128512; &#128151;</p>
                </div>
        `
  );
});

app.listen(PORT, () => {
  console.log("app is listening on port 5000");
});
