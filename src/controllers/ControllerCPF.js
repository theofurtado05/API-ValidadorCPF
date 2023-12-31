const DaoCPF = require('../dao/DaoCPF');

class ControllerCPF {
    async ValidarCPF (cpf) {
        try {
            const response = await DaoCPF.ValidarCPF(cpf);
            return {
                "valid": response,
                "message": response ? 'O CPF é valido' : 'O CPF é invalido'
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async GerarCPF () {
        try{
            const response = await DaoCPF.GerarCPF();
            return response
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new ControllerCPF()