import sequelize from './database.js'
import 'dotenv/config'
import express from 'express'
import heroisRouter from './routes/herois.js'

const app = express()

try {
    await sequelize.sync()
    console.log('conectado com sucesso')
} catch (error) {
    console.error('error ao conectar', error)
}

app.use(express.json())
app.use(heroisRouter)

app.listen(3000, () => console.log('servidor online!'))