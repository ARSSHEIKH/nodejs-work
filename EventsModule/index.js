const EventEmitter = require("events");
const event = new EventEmitter();

// OR 
// const event = require("events");
// const EventEmitter = new event.EventEmitter();


// in js we cannot call more functions with single event, 
// but in node we can call with single event many callbacks funcs

//#region 
// event.on("sayMyName", ()=>{
//     console.log("Your name is ABC")
// })
// event.on("sayMyName", ()=>{
//     console.log("Your name is XYZ")
// })
// event.on("sayMyName", ()=>{
//     console.log("Your name is BCD")
// })
// event.emit("sayMyName");
//#endregion

//#region Registering for the event with callback parameters
event.on("checkPage", (sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})
event.emit("checkPage", 200, "ok");
//#endregion

