const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
}).post("/", (req, res)=>{
  console.log("checking Post request")
  res.send("Hello World Post")
}).put("/", (req, res)=>{
  console.log("checking put request")
  res.send("Hello World put")
})

app.get("/index", (req, res)=>{
  console.log("Hey I am Index")
  res.sendFile("templates/index.html", {root: __dirname})
})

app.get('/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})