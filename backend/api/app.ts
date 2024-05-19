import express from 'express'
const app = express()

app.use('/', (req, res) => {
  res.json('All good!')
})

app.listen(3000, () => {
  console.log('Activating Server at http://localhost:3000')
})
