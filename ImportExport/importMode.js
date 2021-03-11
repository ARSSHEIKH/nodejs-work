
//#region import/require Methods
// for multiple bcoz its return an Object
    //#region Method # 01:
    // const math = require("./exportMod")
    // console.log(math.add(5,5))
    // console.log(math.sub(5,5))
    // console.log(math.name)
    //#endregion
    //#region Method # 02:
const { add, sub, name } = require("./exportMod")

console.log(add(5,5))
console.log(sub(5,5))
console.log(name)
//#endregion
//#endregion


