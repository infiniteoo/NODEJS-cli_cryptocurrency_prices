const KeyManager = require("../lib/KeyManager");
const inquirer = require("inquirer");
const colors = require("colors");

const key = {
  set() {
    console.log("hello from set inside key.js");
  },
  show() {
    console.log("hello from show inside key.js");
  },
  remove() {
    console.log("hello from remove inside key.js");
  },
};

module.exports = key;
