const fs = require('fs'); //do not change this line

const dataAsync = fs.readFile('main.js', 'utf-8', (err, data) => {
    if(err) throw Error()
    console.log(data.split("(")[0].length)
});