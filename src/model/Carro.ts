import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    private cambio: string;
    constructor(_modelo: string, _marca: string, _peso: number, _cor: string, _placa: string, _cidade: string, _ano: string, _cambio: string){
        super(_modelo,_marca,_peso,_cor,_placa,_cidade,_ano )
        this.cambio = _cambio;
    } 
    public setCambio (_cambio:string): void {
        this.cambio = _cambio;
    }

    public getCambio (){
        return this.cambio;
    }
}