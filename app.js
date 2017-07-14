require('dotenv').config()
const express = require('express')
const app = express()
const dal = require('./dal')
const port = process.env.PORT || 4000

//list the Meds using dal.listMeds(limit, cb fn)
app.get('/', (req, res, next) => {
  res
    .status(200)
    .send('Welcome to the Pharma API! Try a call to GET /meds for starters.')
})

app.get('/meds', (req, res, next) => {
  dal.listMeds(10, (err, data) => {
    if (err) console.log(err)
    res.status(200).send(data)
  })
})

app.listen(port, () => console.log('API up on ', port))
