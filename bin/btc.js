#!/usr/bin/env node

const chalk = require('chalk')
const figlet = require("figlet");
const program = require("commander");
const updateNofitier = require("update-notifier");
const pkg = require("../package.json");
const blockchain = require("../commands/blockchain");

updateNofitier({ pkg }).notify({ isGlobal: true });

// larry 3d
program
  .version(pkg.version)
  .action(() => {
    figlet("Bitcoin", {
      font: 'Larry 3D'
    }, function(err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(chalk.greenBright(data));
    });
  })
  .command("blockchain", "Get the bitcoin blockchain")
  .command("transaction", "Create a transaction among the blockchain")
  .command("search", "Search addresses, transactions and blocks")
  .parseAsync(process.argv);
