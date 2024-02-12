import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'

const app = express()
app.disable('x-powered-by')

app.use(json())

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
