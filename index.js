const express = require('express')
const app = express()
app.use(express.json())
const movies = require('./data.json')

app.get('/', (req, res) => {
  res.send('Star Wars API')
})

app.get('/movies', (req, res) => {
  res.send(movies)
})

app.post('/movies', (req, res) => {
  const movie = req.body

  movies.push(movie)

  res.send(movies)
})

app.listen('3000', () => console.log('App listening'))