"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarCarros = exports.listarCarros = exports.persistirCarro = void 0;
const Carro_1 = require("../model/Carro");
let bancoDadosCarro = [];
function persistirCarro(Carro) {
    //persistindo os dados
    try {
        bancoDadosCarro.push(Carro);
    }
    catch {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}
exports.persistirCarro = persistirCarro;
function listarCarros() {
    return bancoDadosCarro;
}
exports.listarCarros = listarCarros;
function inicializarCarros() {
    bancoDadosCarro.push(new Carro_1.Carro('Uno', 'Fiat', 800, 'cinza', 'NFN9D38', 'São Carlos', '1970', 'automático'));
    bancoDadosCarro.push(new Carro_1.Carro('fusca', 'volkswagen', 1000, `Preto`, `DBD7N99`, `Ribeirão Preto`, '2000', `Manual`));
    bancoDadosCarro.push(new Carro_1.Carro('Hylux', 'Toyota', 1100, 'prata', 'NID4D', 'Barrinha', '2010', 'automático'));
    bancoDadosCarro.push(new Carro_1.Carro('Mustang', 'Ford', 850, 'Preto', 'BRE1V05', 'Candia', '2017', 'Manual'));
    bancoDadosCarro.push(new Carro_1.Carro('Commander', 'Jeep', 800, 'Azul', 'BLA8T322', 'Pontal', '1998', 'Automático'));
}
exports.inicializarCarros = inicializarCarros;
//# sourceMappingURL=bancoDeDadosCarro.js.map