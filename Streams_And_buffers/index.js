const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res)=>{
   //#region  normal way
    // for txt
    // fs.readFile("input.txt", (err, data)=>{
    //     if(err) return console.error(err);
    //     // res.end(JSON.parse(data));
    //     res.end(data.toString())
    // })
   // for JSON
    // fs.readFile("patientsData.json", (err, data)=>{
    //     if(err) return console.error(err);
    //     res.end(data);
    // })
    //#endregion

    //#region Streaming way:
    const rstream = fs.createReadStream("patientsData.json")
    rstream.on("data", (chunkdata)=>{
        res.write(chunkdata);
    })
    rstream.on("end", ()=>{
        res.end();
    })
    rstream.on("error", (err)=>{
        console.log(err);
        res.end("file not found");
    })
    //#endregion
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Running at port 8000")
})