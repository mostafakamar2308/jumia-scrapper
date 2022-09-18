const express = require("express");
const phoneRoute = require("./routes/phonesRoute");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());

app.use(express.json());
app.use("/api/v1", phoneRoute);
app.get("/", (req, res) => {
  res.send(
    `
            <h1>Jumia Scrapper</h1>
            <h2>Available Lists</h2>
            <ul>
                <li>Computers</li>
                <li>Phones</li>
                <li>Groceries</li>
            </ul>
            
            <p>to reach any of the available lists go to => https://boiling-reef-36956.herokuapp.com/api/v1/"listName"</p>

            <p>Please Stay patient specially when you try to get to the groceries list XD</p>
        `
  );
});

app.listen(PORT, () => {
  console.log("app is listening on port 5000");
});
