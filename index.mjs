
import express from 'express'
 import cors from 'cors';
const app = express()
app.use(cors());


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
const port = process.env.PORT || 3000;
 
app.listen(port, () => {
  console.log(`i am hello world server ${port}`)



})
