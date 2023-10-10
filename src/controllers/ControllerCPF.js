const DaoCPF = require('../dao/DaoCPF');

class ControllerCPF {
    async ValidarCPF (cpf) {
        try {
            const response = await DaoCPF.ValidarCPF(cpf);
            console.log(response)
            return response

        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async GerarCPF () {
        try{
            const response = await DaoCPF.GerarCPF();
            console.log(response)
            return response
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new ControllerCPF()