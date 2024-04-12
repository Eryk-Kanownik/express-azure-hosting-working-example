const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public")));
  app.get("/", (req, res) => {
    res.sendFile("index.html");
  });
}

app.listen(process.env.PORT || 5000, () =>
  console.log(`http://localhost:${process.env.PORT || 5000}`)
);
