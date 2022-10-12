const express = require("express");
const app = express();
const port = 3000;

// Main routes
app.get("/", (req, res) => {
  res.send("<h1 align='center'>Hello World!</h1>");
});

app.get("/author", (req, res) => {
  res.send("<h1 align='center'>ASZAYCHIK</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
