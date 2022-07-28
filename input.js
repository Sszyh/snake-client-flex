const obj = require("./constants");
let connection;
const setupInput = function(con) {
  
  connection = con();

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  }
  connection.write(obj.obj[input]);
  console.log(`${input} key works`);
};



module.exports = { setupInput };