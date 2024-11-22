const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose")
const employee = require("./models/employee")

mongoose.connect("mongodb://127.0.0.1:27017/company")

app.set('view engine', 'ejs')

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/generate', async (req, res) => {
    //clear the collection employee
    await employee.deleteMany({})

    //generate random data
    let randomnames = ["Rohan", "Sohan", "Mohan"]
    let randomcities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"]
    let randomlanguage = ["Java", "JavaScript", "Python", "C++"]

    for (let index = 0; index < 10; index++) {
        let e = await employee.create({
            name: getRandom(randomnames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomlanguage),
            city: getRandom(randomcities),
            isManager: (Math.random() > 0.5) ? true : false
        })
        console.log(e)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})