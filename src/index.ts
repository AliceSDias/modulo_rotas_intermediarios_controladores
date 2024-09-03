import 'dotenv/config'
import express from 'express'

const servidor = express()

servidor.get('/', (req, res) => {
    console.log(req)
    return res.send('Servidor está OK')
})

servidor.get('/usuarios', (req, res) => {
    console.log(req)
    return res.send('Servidor está OK')
})

servidor.listen(process.env.PORT)