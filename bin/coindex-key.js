const program = require("commander");

program
  .command("set")
  .description("Set API Key - Get at https://nomics.com")
  .action(() => console.log("hello from set"));

program
  .command("show")
  .description("Showe API Key")
  .action(() => console.log("hello from show"));

program
  .command("remove")
  .description("Remove API Key")
  .action(() => console.log("hello from remove"));

program.parse(process.argv);
