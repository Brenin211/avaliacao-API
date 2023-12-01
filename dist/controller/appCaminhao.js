"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Caminhao_1 = require("../model/Caminhao");
const bancoDeDadosCaminhao_1 = require("./bancoDeDadosCaminhao");
(0, bancoDeDadosCaminhao_1.inicializarCaminhoes)();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});
app.post('/cadastro', (req, res) => {
    const { modelo, marca, peso, cor, placa, cidade, ano, eixos } = req.body;
    const caminhao = new Caminhao_1.Caminhao(modelo, marca, peso, cor, placa, cidade, ano, eixos);
    console.log(caminhao);
    (0, bancoDeDadosCaminhao_1.persistirCaminhao)(caminhao);
    res.json({ mensagem: "Caminhão cadastrado com sucesso" });
});
app.get('/caminhoes', (req, res) => {
    const listaDeCaminhoes = (0, bancoDeDadosCaminhao_1.listarCaminhoes)();
    console.log(`Retornando a lista de caminhões cadastrados`);
    res.json(bancoDeDadosCaminhao_1.listarCaminhoes);
});
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
//# sourceMappingURL=appCaminhao.js.map