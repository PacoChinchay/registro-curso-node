const fs = require('node:fs')

fs.readFile('./hola.txt', 'utf-8', (err, text) => {
    console.log(text)
})

console.log("haciendo cositas ricas")

fs.readFile("./hola2.txt", "utf-8", (err, text2) => {
    console.log(text2)
});
