const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Star Wars API')
})

app.listen('3000', () => console.log('App listening'))