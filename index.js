require('dotenv').config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log("Haciendo request");
  res.json({ msg: "This is a test for render.com" });
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});

