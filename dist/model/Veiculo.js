"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    combustivel;
    modelo;
    marca;
    peso;
    cor;
    placa;
    cidade;
    ano;
    constructor(_combustivel, _modelo, _marca, _peso, _cor, _placa, _cidade, _ano) {
        this.combustivel = _combustivel;
        this.modelo = _modelo;
        this.marca = _marca;
        this.peso = _peso;
        this.cor = _cor;
        this.placa = _placa;
        this.cidade = _cidade;
        this.ano = _ano;
    }
    setCombustivel(_combustivel) {
        this.combustivel = _combustivel;
    }
    getCombustivel() {
        return this.combustivel;
    }
    setModelo(_modelo) {
        this.modelo = _modelo;
    }
    getModelo() {
        return this.modelo;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getMarca() {
        return this.marca;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    getPeso() {
        return this.peso;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getCor() {
        return this.cor;
    }
    setPlaca(_placa) {
        this.placa = _placa;
    }
    getPlaca() {
        return this.placa;
    }
    setCidade(_cidade) {
        this.cidade = _cidade;
    }
    getCidade() {
        return this.cidade;
    }
    setAno(_ano) {
        this.ano = _ano;
    }
    getAno() {
        return this.ano;
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map