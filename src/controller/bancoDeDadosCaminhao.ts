import { Veiculo } from "../model/Veiculo";
import { Caminhao } from "../model/Caminhao";

let bancoDadosCaminhao: Caminhao[] = [];

export function persistirCaminhao(Caminhao: Caminhao) {
    //persistindo os dados
    try {
        bancoDadosCaminhao.push(Caminhao);
    } catch {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}

export function listarCaminhoes() {
    return bancoDadosCaminhao;
}

export function inicializarCaminhoes() {
    bancoDadosCaminhao.push(
        new Caminhao('Diesel', 'Atego','Mercedes-benz',2000,'cinza','NBN9D38','São Carlos','1970', 1, ));
    bancoDadosCaminhao.push(
        new Caminhao('Diesel','Globetrotter', 'Volvo', 2500, `Preto`, `DDN7N99`, `Ribeirão Preto`, '2000', 2, ));
    
    bancoDadosCaminhao.push(
        new Caminhao('Diesel','Actros','Mercedes-benz',5000,'prata','JID4D','São Carlos','1970', 3, ));
    
    bancoDadosCaminhao.push(
        new Caminhao( 'Diesel','R 450','Scania',10000,'cinza','NUN9D38','São Carlos','1970', 4,));

    bancoDadosCaminhao.push(
        new Caminhao('Diesel','XF 530','Daf',20000,'Azul','BAA8T322','São Carlos','1970', 5, ));
}