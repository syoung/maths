/* SAMPLE INPUT





*/

var readline = require('readline');

var input = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt("Enter input");

rl.on('line', function (cmd) {

    input.push(cmd);
});

rl.question("What do you think of Node.js? ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});

rl.on('close', function (cmd) {

    console.log(input.join('\n'));
    process.exit(0);
});