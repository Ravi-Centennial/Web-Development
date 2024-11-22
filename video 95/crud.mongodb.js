
use("crudDb")

db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harry web dev",
//     price: 0,
//     assigment: 12,
//     projects: 454
// })

// db.courses.insertMany([
//     { name: "Harry JS Basics", price: 10, assignment: 8, projects: 3 },
//     { name: "Advanced CSS by Sarah", price: 15, assignment: 6, projects: 2 },
//     { name: "React Mastery", price: 50, assignment: 14, projects: 6 },
//     { name: "Node.js Full Guide", price: 20, assignment: 10, projects: 5 },
//     { name: "Python for Beginners", price: 0, assignment: 5, projects: 2 },
//     { name: "Java Complete Bootcamp", price: 30, assignment: 12, projects: 8 },
//     { name: "Flutter App Development", price: 40, assignment: 15, projects: 9 },
//     { name: "Ruby on Rails Essentials", price: 25, assignment: 9, projects: 4 },
//     { name: "C++ Advanced Programming", price: 35, assignment: 11, projects: 7 },
//     { name: "Full-Stack Web Dev", price: 100, assignment: 20, projects: 10 }
// ]);


// let a = db.courses.find({price: 0})

// console.log(a.count())

db.courses.updateOne({price: 0}, {$set:{price: 100}})