const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/patientsData.json`, "utf-8")
    // console.log(data)

    // Note : on above -> `${__dirname}/patientsData.json`  
        //it can be write also as "patientsData.json"
        // and also "./patientsData.json"

    if(req.url === "/")
        res.end(" Hello World ! ")
    else if (req.url === "/about" || req.url === "/about/") 
        res.end(" Welcome to About Us Page")
    else if (req.url === "/contact"|| req.url === "/contact/"){
        res.end(" Welcome to Contact Us Page")
    }
    else if (req.url === "/patients"|| req.url === "/patients/"){
        res.writeHead(200, { "Content-type" : "application/json" });
        
        res.end(data);
        const dataObj = JSON.parse(data);
        console.log(dataObj[2].name)

    }
    else {
        res.writeHead(404, { "Content-type" : "text/html" });
        res.end(" <h1> 404 page not found ! </h1> ")
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Running at port 8000")
})