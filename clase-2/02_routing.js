const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'aplication/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>NOT FOUND: 404</h1>')
      }
      break
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'aplication/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })
          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>NOT FOUND: 404</h1>')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('server listening on port http://localhost:1234')
})
