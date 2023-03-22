const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Star Wars API')
})

app.get('/movies', (req, res) => {
  res.send(require('./data.json'))
})

app.listen('3000', () => console.log('App listening'))