const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const users = [
    {id: 1, name: 'Emon', age: 27, occupation: 'student'},
    {id: 2, name: 'zakir', age: 25, occupation: 'job'},
    {id: 3, name: 'rubel', age: 23, occupation: 'teacher'}
]

app.get('/', (req, res) => {
    res.send('User management server is running...')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('post data hitting');
    const newUser = req.body;
    newUser.id = users.length + 1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
  console.log(`User management listening on port ${port}`)
})