const DaoCNPJ = require('../dao/DaoCNPJ');

class ControllerCNPJ {
    async ValidarCNPJ (cnpj){
        try{
            const response = await DaoCNPJ.ValidarCNPJ(cnpj)
            console.log(response)
            return response
        } catch (err) {
            throw err;
        }
    }

    async GerarCNPJ (){
        try{
            const response = await DaoCNPJ.GerarCNPJ()
            console.log(response)
            return response
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new ControllerCNPJ()