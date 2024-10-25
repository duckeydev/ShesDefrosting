const express = require("express")
app = express()

app.get("/*",(req, res) => {
 res.sendFile(__dirname+"/index.html")
})

app.get((req, res) => {
    res.sendFile(__dirname+"/index.html")
   })
app.listen("8008")