const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')
const { validateMovies } = require('./schemas/movies')

const app = express()
app.use(express.json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'Hola Mundo' })
})

// Todos los recursos que sean MOVIES se identifican con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }

  res.json(movies)
})

app.get('/movies/:id', (req, res) => { // path-to-regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validateMovies(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  console.log('3')
  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data
  }
  // Esto no sería, porque estamos guardando
  // el estado de la aplicación en memoria
  movies.push(newMovie)

  res.status(201).json(newMovie) // actualizar la caché del cliente
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`open server in http://localhost:${PORT}`)
})
