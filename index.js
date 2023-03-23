const express = require('express')
const { body, validationResult } = require('express-validator')

const app = express()
app.use(express.json())

const movies = require('./data.json')

app.get('/', (req, res) => {
  res.send('Star Wars API')
})

app.get('/movies', (req, res) => {
  res.send(movies)
})

app.post('/movies',
  body('movie')
    .notEmpty().withMessage('required field')
    .isString().withMessage('must be a string value'),
  body('year')
    .notEmpty().withMessage('required field')
    .isInt().withMessage('must be an int value')
    .isLength({ min: 4, max: 4 }).withMessage('must be 4 digit length'),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() })
    }
    const movie = req.body

    movies.push(movie)

    res.send(movies)
  })

app.listen('3000', () => console.log('App listening'))