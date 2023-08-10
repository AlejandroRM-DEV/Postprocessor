const fs = require('fs'); //do not change this line

const data = fs.readFile('main.js', 'utf-8',  (err, data) => {
    if (err) throw err;
    console.log(data.split(" ")[1]);
});