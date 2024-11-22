const express = require('express')
const app = express()
const port = 3000
const blog = require("./routes/blog")
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())

app.use('/blog', blog)

app.get("/", (req, res)=>{
  res.send("Hello Bhai")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})