const chalk = require("chalk");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const notEmpty = input => (input === "" ? "This value is required" : true);
const isNumber = input => !Number.isNaN(parseFloat(input));
const greenText = text => chalk.greenBright(text);
const redText = text => chalk.redBright(text);

const getKey = privateKey => {
  return ec.keyFromPrivate(privateKey);
};


module.exports = { notEmpty, isNumber, getKey, greenText, redText };
