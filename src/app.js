import express from 'express'
const app = express()

//rota padrão

app.get('/', (req, res) => {
    res.send('Testando rota padrão')
    
})

export default app
