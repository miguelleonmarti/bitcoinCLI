const inquirer = require("inquirer");
const axios = require("axios").default;

const blockchain = {
  get: async () => {
    const response = await axios.get("https://bitcoin00.herokuapp.com/blockchain");
    return console.log(response.data);
  }
};

module.exports = blockchain;
