const express = require("express")
const app = express();
let port = process.env.PORT || 3001;
const data = require("./db.json")

app.get("/", (req,res)=>{
    res.send("Hello World")
})
app.get("/offers", (req,res)=>{
    res.send(data)
})

app.listen(port, ()=>{
    console.log(`app is listening on Port ${port}`)
})