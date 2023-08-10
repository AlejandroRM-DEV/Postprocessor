board = [
    ["X", "X", "O"],
    ["O", "X", "O"],
    ["O", "O", "X"]
]

for (const line of board) {
    console.log(line.join(" "))
}