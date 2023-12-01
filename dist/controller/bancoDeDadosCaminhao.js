"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarCaminhoes = exports.listarCaminhoes = exports.persistirCaminhao = void 0;
const Caminhao_1 = require("../model/Caminhao");
let bancoDadosCaminhao = [];
function persistirCaminhao(Caminhao) {
    //persistindo os dados
    try {
        bancoDadosCaminhao.push(Caminhao);
    }
    catch {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}
exports.persistirCaminhao = persistirCaminhao;
function listarCaminhoes() {
    return bancoDadosCaminhao;
}
exports.listarCaminhoes = listarCaminhoes;
function inicializarCaminhoes() {
    bancoDadosCaminhao.push(new Caminhao_1.Caminhao('Atego', 'Mercedes-benz', 2000, 'cinza', 'NBN9D38', 'São Carlos', '1970', 1));
    bancoDadosCaminhao.push(new Caminhao_1.Caminhao('Globetrotter', 'Volvo', 2500, `Preto`, `DDN7N99`, `Ribeirão Preto`, '2000', 2));
    bancoDadosCaminhao.push(new Caminhao_1.Caminhao('Actros', 'Mercedes-benz', 5000, 'prata', 'JID4D', 'São Carlos', '1970', 3));
    bancoDadosCaminhao.push(new Caminhao_1.Caminhao('R 450', 'Scania', 10000, 'cinza', 'NUN9D38', 'São Carlos', '1970', 4));
    bancoDadosCaminhao.push(new Caminhao_1.Caminhao('XF 530', 'Daf', 20000, 'Azul', 'BAA8T322', 'São Carlos', '1970', 5));
}
exports.inicializarCaminhoes = inicializarCaminhoes;
//# sourceMappingURL=bancoDeDadosCaminhao.js.map