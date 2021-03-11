const path = require("path");

console.log(path.dirname("E:/NodeJs-Practice/PathModule/path.js"))
console.log(path.extname("E:/NodeJs-Practice/PathModule/path.js"))
console.log(path.basename("E:/NodeJs-Practice/PathModule/path.js"))
console.log(path.parse("E:/NodeJs-Practice/PathModule/path.js"))
const fileName = path.parse("E:/NodeJs-Practice/PathModule/path.js")
console.log(fileName.name)