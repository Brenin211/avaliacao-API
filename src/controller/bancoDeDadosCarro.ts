import { Veiculo } from "../model/Veiculo";
import { Carro } from "../model/Carro";

let bancoDadosCarro: Carro[] = [];

export function persistirCarro(Carro: Carro) {
    //persistindo os dados
    try {
        bancoDadosCarro.push(Carro);
    } catch {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}

export function listarCarros() {
    return bancoDadosCarro;
}

export function inicializarCarros() {
    bancoDadosCarro.push(
        new Carro('Uno','Fiat',800,'cinza','NFN9D38','São Carlos','1970', 'automático'));
    
    bancoDadosCarro.push(
        new Carro('fusca', 'volkswagen', 1000, `Preto`, `DBD7N99`, `Ribeirão Preto`, '2000', `Manual` ));
    
    bancoDadosCarro.push(
        new Carro('Hylux','Toyota',1100,'prata','NID4D','Barrinha','2010', 'automático'));
    
    bancoDadosCarro.push(
        new Carro('Mustang','Ford',850,'Preto','BRE1V05','Candia','2017', 'Manual'));

    bancoDadosCarro.push(
        new Carro('Commander','Jeep',800,'Azul','BLA8T322','Pontal','1998', 'Automático'));
}
