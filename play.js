const net = require("net");
const { connect } = require("./client");

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

