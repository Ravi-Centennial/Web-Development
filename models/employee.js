const mongoose = require("mongoose")

const employee = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
})

module.exports = mongoose.model('employee', employee)