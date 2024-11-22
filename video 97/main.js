//Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "python",
//     city: "New York",
//     isManager: true
// }

// generate 10 such records when a button is called generate data is clicked

//create an Express app with mongoose to achieve it 
// Everytime the button is clicked, you should clear the collection

import mongoose from "mongoose";
import express from "express";
import { Employee } from "./models/Dummydata.js";
const app = express()
const port = 3000

app.set("view engine", "ejs");

let employee = await mongoose.connect("mongodb://localhost:27017/Dummydata")

const generateDummyData = () => {
    const cities = ["New York", "Toronto", "London", "Sydney", "Mumbai"];
    const languages = ["Python", "JavaScript", "Java", "C#", "Ruby"];
    const names = ["Harry", "Sally", "John", "Alice", "Bob", "Sophia", "Tom", "Emma", "Ethan", "Olivia"];

    return Array.from({ length: 10 }, () => ({
        name: names[Math.floor(Math.random() * names.length)],
        salary: Math.floor(Math.random() * 5000000 + 45000000),
        language: languages[Math.floor(Math.random() * languages.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        isManager: Math.random() > 0.5,
    }));
};

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/generate", async (req, res) => {
    try {
        console.log("Clearing the collection...");
        await Employee.deleteMany({});
        console.log("Collection cleared.");

        const dummyData = generateDummyData();
        console.log("Inserting dummy data:", dummyData);

        await Employee.insertMany(dummyData);
        console.log("Dummy data generated successfully!");

        res.send("Dummy data generated successfully!");
    } catch (err) {
        console.error("Error generating data:", err);
        res.status(500).send("An error occurred.");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
