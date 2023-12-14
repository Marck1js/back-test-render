require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

const middleware = (req, res, next) => {
  let { token } = req.query;

  if (token == "1234$#2134k203") {
    next();
  } else {
    return res.status(400).send({
      status: "404",
      msg: "You have not access",
    });
  }
};

app.get("/", middleware, (req, res) => {
  console.log("Haciendo request");
  res.json({ msg: "This is a test for render.com" });
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
