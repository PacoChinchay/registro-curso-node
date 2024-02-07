// Esto sólo en los módulos nativos que no tengan promesas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require("node:fs/promises");


// IIFE
(
  async () => {
    const text = await fs.readFile("./hola.txt", "utf-8")
    console.log("leyendo el primer texto:", text)
    
    console.log("haciendo cositas ricas")
    
    const text2 = await fs.readFile("./hola2.txt", "utf-8")
    console.log("leyendo el segundo texto:", text2);
  }
)()