const http = require("http");

const server = http.createServer((req, res) => {
    res.end(" Hello World ! ")
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Running at port 8000")
})