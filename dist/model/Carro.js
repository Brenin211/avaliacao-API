"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    cambio;
    constructor(_combustivel, _modelo, _marca, _peso, _cor, _placa, _cidade, _ano, _cambio) {
        super(_combustivel, _modelo, _marca, _peso, _cor, _placa, _cidade, _ano);
        this.cambio = _cambio;
    }
    setCambio(_cambio) {
        this.cambio = _cambio;
    }
    getCambio() {
        return this.cambio;
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map