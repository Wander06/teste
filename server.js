const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Rota home: " + req.url)
})

app.listen(port, () =>{
    console.log(`Server bombando na porta: http://localhost:${port}`)
})