const chalk = require("chalk");
const validator=require("validator");

const res = validator.isEmail("arsheikh665@gmail.com")
const res2 = validator.isEmail("arsheikhail@g.m")
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))
console.log(res2 ? chalk.green.inverse(res2) : chalk.red.inverse(res2))