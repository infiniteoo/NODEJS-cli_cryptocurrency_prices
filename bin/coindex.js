#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");
require("dotenv").config();

console.log("api key " + process.env.NOMICS_API_KEY);

program
  .version(pkg.version)
  .command("key", "Manage API Key -- https://nomics.com")
  .parse(process.argv);
