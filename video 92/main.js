const express = require('express');
const path = require('path');

const app = express();

// Set the view engine
app.set('view engine', 'ejs');

// Set the views directory (optional if 'views' is in the root)
app.set(path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {user: "Harry"}); // Renders 'index.ejs' from the 'views' folder
});

app.listen(3000, () => console.log('Server is running on port 3000'));
