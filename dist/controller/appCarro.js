"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Carro_1 = require("../model/Carro");
const bancoDeDadosCarro_1 = require("./bancoDeDadosCarro");
(0, bancoDeDadosCarro_1.inicializarCarros)();
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});
app.post('/cadastro', (req, res) => {
    const { combustivel, modelo, marca, peso, cor, placa, cidade, ano, cambio } = req.body;
    const carro = new Carro_1.Carro(combustivel, modelo, marca, peso, cor, placa, cidade, ano, cambio);
    console.log(carro);
    (0, bancoDeDadosCarro_1.persistirCarro)(carro);
    res.json({ mensagem: "Carro cadastrado com sucesso" });
});
app.get('/carro', (req, res) => {
    const listaDeCarros = (0, bancoDeDadosCarro_1.listarCarros)();
    console.log(`Retornando a lista de carros cadastrados`);
    res.json(listaDeCarros);
});
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
//# sourceMappingURL=appCarro.js.map