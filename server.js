const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()
app.use(cors())

app.get("/", (req,res)=>{
res.send("Jan Setu Scheme API Running 🇮🇳")
})

app.get("/schemes",(req,res)=>{

const data = fs.readFileSync("./schemes.csv","utf8")

const rows = data.split("\n").slice(1)

const schemes = rows.map(row=>{

const parts = row.split(",")

return{
name:parts[0],
benefit:parts[1]
}

})

res.json(schemes)

})

app.listen(5000,()=>{
console.log("Jan Setu backend running at http://localhost:5000")
})