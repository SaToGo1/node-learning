const express = require('express')
const movies = require('./movies.json')

const app = express()
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'Hola Mundo' })
})

// Todos los recursos que sean MOVIES se identifican con /movies
app.get('/movies', (req, res) => {
  res.json(movies)
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`open server in http://localhost:${PORT}`)
})
