const inquirer = require("inquirer");
const axios = require("axios").default;
const utils = require("../lib/utils");

const register = {
  get: async () => {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "newNodeUrl",
        message: "New Node URL:",
        validate: utils.notEmpty
      }
    ]);

    if (answer.newNodeUrl !== "https://bitcoin01.herokuapp.com") {
      return console.log("\n" + utils.redText("Invalid Node URL"));
    }

    const response = await axios.post(
      "https://bitcoin00.herokuapp.com/register-and-broadcast-node",
      { newNodeUrl: answer.newNodeUrl }
    );

    console.log("\n" + utils.greenText(response.data.message));
  }
};

module.exports = register;
