var express = require("express")
var app = express()

app.post('/', (req,res)=> res.send("Hola Miguel"))
app.listen(3000)
