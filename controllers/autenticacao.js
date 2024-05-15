import jwt from 'jsonwebtoken'
const segredo = process.env.SECRET

const login = (req, res) => {
    const { usuario, senha } = req.body
    //depois vamos bucar do banco de dados e validar a senha
    if (usuario == 'marlon' && senha == 29052003) {
        //gerar token
        const permissao = { tipo: 'admin' }
        const token = jwt.sign(permissao, segredo, { expiresIn: 60 })
        res.status(200).send({ mesage: 'login efetuado com sucesso!', token })
    } else {
        res.status(500).send({ mensagem: 'credenciais inválidas!' })
    }
}

export { login }
