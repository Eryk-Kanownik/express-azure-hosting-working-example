const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public", "build")));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, () =>
  console.log(`http://localhost:${process.env.PORT || 5000}`)
);
