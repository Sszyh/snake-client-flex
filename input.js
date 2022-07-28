let connection;
const setupInput = function (con) {
  
  connection = con();

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
}


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up")
    console.log("user typy w")
  }
  if (key === 'a') {
    connection.write("Move: left")
    console.log("user typy a")
  }
  if (key === 's') {
    connection.write("Move: down")
    console.log("user typy s")
  }
  if (key === 'd') {
    connection.write("Move: right")
    console.log("user typy d")
  }
  if (key === 'z') {
    connection.write("Say: today is so hot!")
    console.log("user typy d")
  }
};


module.exports = { setupInput }