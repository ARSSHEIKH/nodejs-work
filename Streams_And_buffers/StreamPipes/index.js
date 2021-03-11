const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res)=>{

    //#region Streaming way:
    const rstream = fs.createReadStream("../patientsData.json")
    rstream.pipe(res);
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Running at port 8000")
})