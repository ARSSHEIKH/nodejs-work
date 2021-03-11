
const fs = require("fs")

const studentData = {
    name : "Student1",
    age : 45,
    disease : "Cororna"
}

const jsonData = JSON.stringify(studentData);
// const objData = JSON.parse(jsonData)

// console.log(jsonData)
// console.log(objData)

fs.writeFile('studentData.json', jsonData, (err)=>{
    console.log("Done")
})
fs.readFile('studentData.json','utf-8', (err, data)=>{
    // console.log(data)
    const dataObj = JSON.parse(data)
    console.log(dataObj)
    console.log(dataObj.name)
})


