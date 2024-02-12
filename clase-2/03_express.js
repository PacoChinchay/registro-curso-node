const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()
const PORT = process.env.PORT ?? 1234
app.disable('x-powered-by')

app.use(express.json())
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request o peticiones que son POST y que tienen header Content-Type: aplication/json

//   let body = ''

//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>no hay, no existe</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
