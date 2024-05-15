import jwt from "jsonwebtoken";
const segredo = process.env.SECRET

const validarToken = (req, res, next) => {
    try {
        const token = req.headers?.authorization
        const informacaoDoToken = jwt.verify(token, segredo)
        console.log(`conteúdo do token: ${informacaoDoToken}`)
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send({ mensagem: 'ocorreu um erro!'})
    }
}

export { validarToken }