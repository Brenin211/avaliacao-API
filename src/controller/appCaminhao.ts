import express from "express";
import cors from 'cors';
import { Veiculo } from "../model/Veiculo";
import { Caminhao } from "../model/Caminhao";
import { inicializarCaminhoes, listarCaminhoes, persistirCaminhao } from "./bancoDeDadosCaminhao";

inicializarCaminhoes();

const app = express();
const port: number = 4001;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log('Recebi sua requisição');

    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});

app.post('/cadastro', (req, res) => {
const {combustivel,modelo, marca, peso, cor, placa, cidade, ano, eixos} = req.body;

const caminhao = new Caminhao(combustivel,modelo, marca, peso, cor, placa, cidade, ano, eixos);

console.log(caminhao);

persistirCaminhao(caminhao);

res.json({ mensagem: "Caminhão cadastrado com sucesso" })
})

app.get('/caminhao', (req, res) => {
    const listaDeCaminhoes = listarCaminhoes();

	console.log(`Retornando a lista de caminhoes cadastrados`);

    res.json(listaDeCaminhoes);
});

app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});