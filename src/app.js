import express from 'express'
const app = express()

//indicar para o express ler body com o json
app.use(express.json())

const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'},
]

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

function buscaIndexSelecao(id) {
    return selecoes.findIndex( selecao => selecao.id == id)
}


//rota padrão

app.get('/', (req, res) => {
    res.send('Curso de nodeJS')
    
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscaIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com o id ${req.params.id}, excluída com sucesso!`)

} )

export default app
