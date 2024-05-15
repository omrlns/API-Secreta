import { Heroi } from '../models/Heroi.js'

const criarHeroi = async (req, res) => {
    const { nome, pontosDePoder } = req.body
    if (nome && pontosDePoder) {
        const heroi = await Heroi.create({ nome, pontosDePoder })
        res.status(201).send({ message: "herói cadastrado", data: heroi })
    } else {
        res.status(400).send({ message: "favor informar o nome e pontosDePoder" })
    }
}
const getHerois = async (req, res) => {
    const herois = await Heroi.findAll()
    res.status(200).send({ success: true, data: herois })
}
const atualizaHeroi = async (req, res) => {
    const { nomeAntigo, nomeNovo } = req.body
    const heroi = await Heroi.update({ nome: nomeNovo }, { where: { nome: nomeAntigo } })
    res.status(200).send({ success: true, data: heroi })
}
const apagarHeroi = async (req, res) => {
    const { id } = req.params
    await Heroi.destroy({ where: { id } })
    res.status(200).send({ success: true })
}
const getHeroiPeloId = async (req, res) => {
    const { id } = req.params
    const heroi = await Heroi.findByPk(id)
    res.status(200).send({ success: true, data: heroi })
}

export { criarHeroi, getHerois, atualizaHeroi, apagarHeroi, getHeroiPeloId }