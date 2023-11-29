import { Veiculo } from "./Veiculo";

export class Caminhao extends Veiculo{
    private eixos: number;

    constructor(_modelo: string , _marca: string , _peso: number , _cor: string , _placa: string , _cidade: string , _ano: string , _eixos: number){
        super(_modelo,_marca,_peso,_cor,_placa,_cidade,_ano);
        this.eixos = _eixos;
    }
    public setEixos(_eixos: number): void{
        this.eixos = _eixos;
    }

    public getEixos(): number{
        return this.eixos;
    }

}