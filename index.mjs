console.log("i am hello world server");

import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('Hello World home!')
})
app.get('/profile', (req, res) => {
  res.send('Hello World profile!')
})
app.get('/weather', (req, res) => {
  res.send({
    weather:'sunny',
    temperture:20,
city:'London'
  })
})
app.listen(port, () => {
  console.log(`i am hello world server ${port}`)



})
