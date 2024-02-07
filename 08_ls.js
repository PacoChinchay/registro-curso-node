const fs = require('node:fs')

fs.readdir('.', (err, files) => {
    if(err) {
        console.log('se tubo un error al leer el directorio:', err)
        return;
    }

    files.forEach(file => {
        console.log(file)
    })
})