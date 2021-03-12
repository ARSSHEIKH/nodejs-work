const dotenv = require('dotenv');
const http = require("http")
const fs = require("fs")
const requests = require("requests")

const homeFile = fs.readFileSync("index.html", "utf-8");

const replceVal = (tempVal,orgVal)=>{
    let values = tempVal.replace("{%tempVal%}", (orgVal.main.temp-273.15).toFixed(2))
    values = values.replace("{%tempMin%}", (orgVal.main.temp_min-273.15).toFixed(2))
    values = values.replace("{%tempMax%}", (orgVal.main.temp_max-273.15).toFixed(2))
    values = values.replace("{%location%}", orgVal.name)
    values = values.replace("{%country%}", orgVal.sys.country)
    values = values.replace("{%temperatureStatus%}", orgVal.weather.main)
    return values;
}

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        requests(`http://api.openweathermap.org/data/2.5/weather?q=karachi,pk&APPID=${process.env.WEATHER_APIKEY}`)
            .on('data', function (chunk) {
                const objData = JSON.parse(chunk)
                const arrData = [objData]
                const realTimeData = arrData.map((val)=>replceVal(homeFile,val)).join()
                res.write(realTimeData)
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);
                res.end()
            });
    }
    else{
        res.end("File not found");
    }
})

server.listen(8000, "127.0.0.1")
