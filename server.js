const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/teste', (req, res) => {
    res.sendFile(__dirname + '/public/teste.html')
})

app.listen(port, () =>{
    console.log(`Server bombando na porta: http://localhost:${port}`)
})