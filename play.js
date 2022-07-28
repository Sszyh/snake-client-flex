// const net = require("net");
// const { stdin } = require("process");
const { connect } = require("./client");
const { setupInput } = require("./input");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "192.168.0.36",
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");
//   conn.on("connect", () => {
//     console.log("connected!");
//   })
//   conn.on("data", (data) => {
//     console.log(data);
//   })
//   return conn;

// };

console.log("Connecting ...");
connect();


// setup interface to handle user input from stdin

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };

// //stdin.on("data", handleUserInput);

// const handleUserInput = function (key) {
//   if (key === '\u0003') {
//     process.exit();
//   }
// };

// stdin.on("data", handleUserInput);

setupInput();
