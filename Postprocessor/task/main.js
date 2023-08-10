const fs = require("node:fs")

let users= []
data = fs.readFileSync("database.csv", 'utf8')

for(const line of data.split("\n").slice(1)){
    const parts = line.split(", ")
    users.push({
        id: parts[0],
        nickname: parts[1],
        password: parts[2],
        consent: parts[3],
    })
}

console.log(`The user ${users[0].nickname} has "${users[0].consent}" consent status for sending emails`)