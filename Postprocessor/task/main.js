const fs = require("node:fs")
const {createHash} = require('node:crypto');

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

fs.writeFileSync("hash_database.csv", "id, nickname, password, consent to mailing\n", {encoding: "utf8"})
for(const user of users){
    const hash = createHash("sha256").update(user.password).digest("hex");
    const data = `${user.id}, ${user.nickname}, ${hash}, ${user.consent}\n`
    fs.appendFileSync("hash_database.csv", data, {encoding: "utf8"})
}


fs.writeFileSync("filtered_database.csv", "id, nickname, password, consent to mailing\n", {encoding: "utf8"})
let index = 1;
for(const user of users){
    if(user.id === "-" || user.password === "-" || user.nickname === "-" || user.consent === "-"){
        continue;
    }

    const hash = createHash("sha256").update(user.password).digest("hex");
    const data = `${index++}, ${user.nickname}, ${hash}, ${user.consent}\n`
    fs.appendFileSync("filtered_database.csv", data, {encoding: "utf8"})
}