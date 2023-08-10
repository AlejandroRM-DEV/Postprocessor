const fs = require('fs'); //do not change this line

const dataSync = fs.readFileSync('main.js', 'utf-8'); 
console.log(dataSync.split(' ').slice(0)[0]);
//or you can delete two lines above

console.log('Finish');