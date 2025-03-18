const express = require('express')
const app  = express()
const port = 3000

function obterNumeroAleatorio(min , max) {
        return Math.floor(Math.random() * (max - min + 1)) + min

}


function obeterNomeAleatorio() {
    const nomes = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hank', 'Ivy', 'Jack']
    return nomes [ Math.floor(Math.random()* nomes.length)]
}

// Rota para obter um número aleatório
app.get('/random', (req,res) => {
    const min = parseInt(req.query.min)
    const max = parseInt(req.query.max)

    if(isNaN(min) || isNaN(max)) {
        return res.status (400),json ({error: 'Parametros min e max devem ser números válidos.'})
    }

    const numeroAleatorio = obterNumeroAleatorio(min, max)
    res.json({numeroAleatorio})
})

// Rota para obter um nome aleaório
app.get ('/random/name', (req,res) => {
    const nomeAleatorio = obeterNomeAleatorio()
    res.json(nomeAleatorio)
})

// Rodar a APi
app.listen(port,() => {
console.log(`API rodando em http://localhost:${port}`)
})

