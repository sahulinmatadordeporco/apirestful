const fs = require('fs')

const listarAulas = (req, res) => {
    fs.readFile('bancoDeDados.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo');
        }
        const aulas = JSON.parse(data)
        res.status(200).send(aulas)
    })
}

const atualizarAula = (req, res) => {
    const id = req.params.id
    const dados = req.body
    fs.readFile('bancoDeDados.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo');
        }
        const aulas = JSON.parse(data)
        const aula = aulas.find(aula => aula.id == id)
        if (aula) {
            Object.assign(aula, dados)
            fs.writeFile('bancoDeDados.json', JSON.stringify(aulas), (err) => {
                if (err) {
                    return res.status(500).send('Erro ao escrever no arquivo');
                }
            })
            res.status(200).send(aula)
        } else {
            return res.status(500).send('Aula não encontrada');
        }
    })
}

module.exports = {listarAulas, atualizarAula}