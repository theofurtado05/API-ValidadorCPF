const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//controllers
const ControllerCPF = require('./src/controllers/ControllerCPF.js');
const ControllerCNPJ = require('./src/controllers/ControllerCNPJ.js');

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
        const {cpf} = req.params;
        const response = await ControllerCPF.ValidarCPF(cpf)    
        
        res.json(response)
})

app.get('/gerarCpf', async (req, res) => {
    const response = await ControllerCPF.GerarCPF()
    res.json(response)

})

app.get('/validarCnpj/:cnpj', async (req, res) => {
        const {cnpj} = req.params;
        const response = await ControllerCNPJ.ValidarCNPJ(cnpj)
        res.json(response)
})

app.get('/gerarCnpj', async (req, res) => {
   const response = await ControllerCNPJ.GerarCNPJ()
   res.json(response)

})
