const { red } = require("chalk");
const chalk = require("chalk");

// console.log(chalk.blue("Blue Color"))
// console.log(chalk.red("DANGER"))
// console.log(chalk.green("SUCCESS"))
// console.log(chalk.yellow("WARNING"))


// console.log(chalk.gray.italic("gray italic"))
// console.log(chalk.gray.underline("gray underline"))
// console.log(chalk.gray.bold("gray bold"))

//Background color
console.log(chalk.blue.underline.inverse("Blue Color"))
console.log(chalk.blue.inverse("Blue Color"))