const { request } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require(`body-parser`);
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.query("SELECT * FROM characters", (error, result) => {
    response(200, result, "get all data from characters", res);
  });
});

app.get("/school", (req, res) => {
  const sql = `SELECT Name FROM characters WHERE School = ${req.query.School}`;
  db.query(sql, (error, result) => {
    response(200, result, "Find Characters By School", res);
  });
  console.log(`Find School : ${req.query.School}`);
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
