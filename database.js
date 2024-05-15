import {Sequelize} from 'sequelize'
import 'dotenv/config'

const sequelize = new Sequelize('')

try {
    await sequelize.authenticate()
    console.log('conectado com sucesso')
} catch (error) {
    console.error('error ao conectar', error)
}

export default sequelize