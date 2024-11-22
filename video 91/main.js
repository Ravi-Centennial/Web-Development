const fs = require("fs");
const path = require("path");
const express = require('express')
const app = express()
const port = 3000

// Use path.resolve() to get the absolute path of the directory. Use your own path for working 
let files = path.resolve("D:/Sigma web development course/video 91/files");

console.log("Directory", files);

// Check if the directory doesn't exist, then create it
if (!fs.existsSync(files)) {
    fs.mkdirSync(files);
}

// Read the files in the directory
let fileDir = fs.readdirSync(files);

fileDir.forEach(element => {
    // Use path.join() to construct file paths in a platform-independent manner
    let fileFullPath = path.join(files, element);

    // Check if the element is a file (not a directory)
    if (fs.statSync(fileFullPath).isFile()) {
        // Create a directory based on the file extension
        let extension = path.extname(element).slice(1); // Extract file extension
        let folderPath = path.join(files, extension);

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        // Move the file to the new folder
        let destinationPath = path.join(folderPath, element);
        fs.renameSync(fileFullPath, destinationPath);
        console.log(`File "${element}" moved to "${destinationPath}"`);
    }
});

app.get("/", (req, res)=>{
    res.send(fileDir)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  