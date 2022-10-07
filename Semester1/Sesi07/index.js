const http = require("http");
const rupiah = require("rupiah-format");
const fs = require("fs");
const os = require("os");
const host = `localhost`;
const port = 777;

const server = http.createServer(function (request, response) {
  const nickName = "aszaychik";
  const money = 777000;
  const price = 666000;
  const remainMoney = rupiah.convert(money - price);
  const result = `Hello my nickname is ${nickName}, My money is ${rupiah.convert(money)}, I bought food at price ${rupiah.convert(price)}, And my remaining money is ${remainMoney}`;
  fs.appendFile(`remainMoney.txt`, result, () => {
    console.log(`DATA SAVED`);
  });
  const cpus = os.cpus();
  function checkMyCpu() {
    let myCpu = [];
    cpus.map((cpu, i) => {
      myCpu.push(cpu.model);
    });
    return myCpu[0];
  }
  response.statusCode = 200;
  response.end(`<h1 style='background: grey; color:white; text-align:center'>${result}</h1><footer style='background: black; color:white; text-align:center'>My Cpu : ${checkMyCpu()}</footer>`);
});
server.listen(port, host, function () {
  console.log(`server available ${host}:${port}`);
});
