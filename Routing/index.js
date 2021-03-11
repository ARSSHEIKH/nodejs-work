const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url === "/")
        res.end(" Hello World ! ")
    else if (req.url === "/about" || req.url === "/about/") 
        res.end(" Welcome to About Us Page")
    else if (req.url === "/contact"|| req.url === "/contact/"){
        // res.end(" Welcome to Contact Us Page")
        // OR second method is:
        res.write(" Welcome to Contact Us Page ")
        res.end()
    }
    else {
        res.writeHead(404, { "Content-type" : "text/html" });
        res.end(" <h1> 404 page not found ! </h1> ")
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Running at port 8000")
})