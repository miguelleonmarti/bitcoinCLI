#!/usr/bin/env node

const chalk = require("chalk");
const figlet = require("figlet");
const program = require("commander");
const updateNofitier = require("update-notifier");
const pkg = require("../package.json");

updateNofitier({ pkg }).notify({ isGlobal: true });

program
  .version(pkg.version)
  .action(() => {
    figlet(
      "Bitcoin",
      {
        font: "Larry 3D"
      },
      function(err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        console.log(chalk.greenBright(data));
      }
    );
  })
  .command("blockchain", "Get the bitcoin blockchain")
  .command("transaction", "Create a transaction among the blockchain")
  .command("search", "Search addresses, transactions and blocks")
  .command("mine", "Mine a new block")
  .command("register", "Register a new node to the blockchain")
  .parseAsync(process.argv);
