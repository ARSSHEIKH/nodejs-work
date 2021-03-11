const add=(a, b)=>{
    return a+b;
}
const sub=(a, b)=>{
    return a-b;
}
const name = "Abc";

// // #regionfor single
// module.exports = add
// // #endregion

// #region for multiple exports
    // #region Method # 01:
    // module.exports.add = add
    // module.exports.sub = sub
    // module.exports.name = name
    // #endregion
    // #region Method # 02:
    module.exports = { add, sub, name}
    // #endregion
//#endregion
