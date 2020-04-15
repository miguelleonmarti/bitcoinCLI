const inquirer = require("inquirer");
const axios = require("axios").default;
const utils = require("../lib/utils");
const Transaction = require("../lib/transaction.model");

const transaction = {
  create: async () => {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "fromAddress",
        message: "Your address:",
        validate: input => (input === "" ? "This value is required" : true)
      },
      {
        type: "input",
        name: "toAddress",
        message: "The recipient's address:",
        validate: utils.notEmpty
      },
      {
        type: "number",
        name: "amount",
        message: "The amount of bitcoins:",
        validate: utils.isNumber
      },
      {
        type: "password",
        name: "privateKey",
        message: "Your private key in order to sign the transaction:",
        validate: utils.notEmpty
      }
    ]);

    const newTransacion = new Transaction(
      answers.fromAddress,
      answers.toAddress,
      answers.amount
    );

    try {
      newTransacion.signTransaction(utils.getKey(answers.privateKey));
    } catch (error) {
      return console.error('\n' + error.message)
    }

    try {
      const response = await axios.post(
        "https://bitcoin00.herokuapp.com/transaction/broadcast",
        {
          id: newTransacion.id,
          fromAddress: answers.fromAddress,
          toAddress: answers.toAddress,
          amount: answers.amount,
          signature: newTransacion.signature
        }
      );
      console.log('\n'+utils.greenText(response.data.message))
    } catch (error) {
      console.error('\n' + error.message);
    }
  }
};

module.exports = transaction;

/**
 * id: string;
    fromAddress: string;
    toAddress: string;
    amount: number;
    signature?: string;
 */
