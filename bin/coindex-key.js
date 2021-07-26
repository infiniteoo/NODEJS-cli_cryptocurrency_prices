const program = require("commander");
const key = require("../commands/key");

program
  .command("set")
  .description("Set API Key - Get at https://nomics.com")
  .action(key.set);

program.command("show").description("Showe API Key").action(key.show);

program.command("remove").description("Remove API Key").action(key.remove);

program.parse(process.argv);
