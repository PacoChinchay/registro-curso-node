const http = require('node:http')
const { findAvailablePort } = require('./12_free_port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('hola guapos')
})

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(
      `server escuchando como vieja chismosa http://localhost:${port}`
    )
  })
})
