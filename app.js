const express = require("express");
const phoneRoute = require("./routes/phonesRoute");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/v1", phoneRoute);

app.listen(PORT, () => {
  console.log("app is listening on port 5000");
});
