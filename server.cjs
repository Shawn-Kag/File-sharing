const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// Ä£ÄâÓÃ»§
app.post('/abe/login', (req, res) => {
    res.json({
        token: 'fake-token',
        attributes: ['Admin', 'User', 'GroupA']
    })
})

app.post('/abe/register', (req, res) => {
    res.json({ message: 'Register success' })
})

app.get('/abe/list', (req, res) => {
    res.json([
        { id: 1, name: 'test.pdf' }
    ])
})

app.post('/abe/encrypt-file', (req, res) => {
    res.json({ message: 'File uploaded (mock)' })
})

app.get('/abe/download/:id', (req, res) => {
    res.send('Download mock file')
})

app.listen(8080, () => {
    console.log('Mock server running on http://localhost:8080')
})