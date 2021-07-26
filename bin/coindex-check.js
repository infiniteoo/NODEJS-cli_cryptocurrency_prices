const program = require("commander");

program
  .command("price")
  .description("Check price of coins")
  .action(() => console.log("hello from price"));

program.parse(process.argv);

