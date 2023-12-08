"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caminhao = void 0;
const Veiculo_1 = require("./Veiculo");
class Caminhao extends Veiculo_1.Veiculo {
    eixos;
    constructor(_combustivel, _modelo, _marca, _peso, _cor, _placa, _cidade, _ano, _eixos) {
        super(_combustivel, _modelo, _marca, _peso, _cor, _placa, _cidade, _ano);
        this.eixos = _eixos;
    }
    setEixos(_eixos) {
        this.eixos = _eixos;
    }
    getEixos() {
        return this.eixos;
    }
}
exports.Caminhao = Caminhao;
//# sourceMappingURL=Caminhao.js.map