const path = require('node:path')

console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/paco-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/paco-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname("/tmp/paco-secret-files/password.txt")
console.log(extension)
