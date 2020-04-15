const inquirer = require("inquirer");
const axios = require("axios").default;
const utils = require("../lib/utils");

class SearchCommand {
  async select() {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "type",
        message: "What do you want to search?",
        choices: ["Address", "Transaction", "Block"]
      }
    ]);

    switch (answer.type) {
      case "Address":
        await this.searchAddress();
        break;
      case "Transaction":
        await this.searchTransaction();
        break;
      case "Block":
        await this.searchBlock();
        break;
    }
  }

  async searchAddress() {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "address",
        message: "Address:",
        validate: utils.notEmpty
      }
    ]);

    try {
      const response = await axios.get(
        `https://bitcoin00.herokuapp.com/address/${answer.address}`
      );
      console.log('\n')
      console.log('Balance: ' + response.data.balance)
    } catch (error) {
      console.error('\n' + utils.redText(error.message));
    }
  }

  async searchTransaction() {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "transactionId",
        message: "Transaction identifier:",
        validate: utils.notEmpty
      }
    ]);

    try {
      const response = await axios.get(
        `https://bitcoin00.herokuapp.com/transaction/${answer.transactionId}`
      );
      console.log('\n')
      console.log(response.data.transaction)
    } catch (error) {
      console.error('\n' + utils.redText(error.response.data.message));
    }
  }

  async searchBlock() {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "blockHash",
        message: "Block hash (it could have been id or height instead of hash):",
        validate: utils.notEmpty
      }
    ]);

    try {
      const response = await axios.get(
        `https://bitcoin00.herokuapp.com/block/${answer.blockHash}`
      );
      console.log('\n')

      if (!response.data.block) {
        return console.log(utils.redText('There is not a block with this hash.'))
      }
      
      console.log(response.data.block)
    } catch (error) {
      console.error('\n' + utils.redText(error.message));
    }
  }
}

module.exports = SearchCommand;
