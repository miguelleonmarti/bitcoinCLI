const { v1: uuidv1 } = require('uuid');
const sha256 = require("sha256")
const { ec } = require("elliptic");
const ellipticCurve = new ec("secp256k1");

class Transaction {

  constructor(
    fromAddress,
    toAddress,
    amount
  ) {
    this.id = this.generateId();
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }

  generateId() {
    return uuidv1()
      .split("-")
      .join("");
  }

  signTransaction(signPrivateKey) {
    if (signPrivateKey.getPublic("hex") !== this.fromAddress) {
      throw new Error("You cannot sign transactions for other wallets!");
    }

    const transactionHash = this.calculateHash();
    this.signature = signPrivateKey.sign(transactionHash, "base64").toDER("hex");
  }

  calculateHash(){
    return sha256(
      this.id + this.fromAddress + this.toAddress + this.amount
    ).toString();
  }

  isValid() {
    if (!this.fromAddress) return false;
    if (!this.signature || this.signature.length === 0) return false;

    const publicKey = ellipticCurve.keyFromPublic(this.fromAddress, "hex");
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}

module.exports = Transaction;