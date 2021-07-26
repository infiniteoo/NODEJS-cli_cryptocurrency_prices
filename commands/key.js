const KeyManager = require("../lib/KeyManager");
const inquirer = require("inquirer");
const colors = require("colors");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key ".green + "https://nomics.com",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API Key Set".blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("current API key: ", key.yellow);

      return key;
    } catch (error) {
      return error;
    }
  },
  remove() {
    console.log("hello from remove inside key.js");
  },
};

module.exports = key;
