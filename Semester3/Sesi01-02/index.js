const { request } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require(`body-parser`);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1 align='center'>Hello World!</h1>");
});

app.get("/author", (req, res) => {
  console.log({ urlParam: req.query });
  res.send("<h1 align='center'>ASZAYCHIK</h1>");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send("LOGIN SUCCESS");
});

app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("USERNAME CHANGED");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
