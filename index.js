const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//controllers
const ControllerCPF = require('./src/controllers/ControllerCPF.js');


const PORT = process.env.PORT || 9002

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.get('/validarCpf/:cpf', async (req, res) => {
    try {
        const {cpf} = req.params;
        ControllerCPF.ValidarCPF(cpf)
    } catch (err) {
        throw err;
    }
    
})

app.get('/gerarCpf', async (req, res) => {
    try {
        ControllerCPF.GerarCPF()
    } catch (err) {
        throw err;
    }
})
