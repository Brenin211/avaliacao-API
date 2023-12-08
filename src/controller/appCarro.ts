import express from "express";
import cors from 'cors';
import { Carro } from "../model/Carro";
import { Veiculo } from "../model/Veiculo";
import { inicializarCarros, persistirCarro, listarCarros } from "./bancoDeDadosCarro";

inicializarCarros();

const app = express();
const port: number = 4000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log('Recebi sua requisição');

    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});

app.post('/cadastro', (req, res) => {
const { combustivel,modelo, marca, peso, cor, placa, cidade, ano, cambio} = req.body;

const carro = new Carro(combustivel,modelo, marca, peso, cor, placa, cidade, ano, cambio);

console.log(carro);

persistirCarro(carro);

res.json({ mensagem: "Carro cadastrado com sucesso" })
})

app.get('/carro', (req, res) => {
    const listaDeCarros = listarCarros();

	console.log(`Retornando a lista de carros cadastrados`);

    res.json(listaDeCarros);
});

app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});