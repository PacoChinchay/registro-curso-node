// Esto sólo en los módulos nativos que no tengan promesas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from "node:fs/promises";

Promise.all([
    readFile('./hola.txt', 'utf-8'),
    readFile('./hola2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('leyendo el primer texto:', text)
    console.log("leyendo el segundo texto:", secondText)
})
