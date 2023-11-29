   export class Veiculo{
 private modelo: string;
    private marca: string;
    private peso: number;
    private cor: string;
    private placa: string;
    private cidade: string;
    private ano: string;

    public constructor(_modelo: string , _marca: string , _peso: number , _cor: string , _placa: string , _cidade: string , _ano: string){
        this.modelo = _modelo;
        this.marca = _marca;
        this.peso = _peso;
        this.cor = _cor;
        this.placa = _placa;
        this.cidade = _cidade;
        this.ano = _ano;
    }

    
    public setModelo(_modelo: string): void{
        this.modelo = _modelo;
    }

    public getModelo(){
        return this.modelo;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getMarca() {
        return this.marca;
    }

    public setPeso(_peso: number): void {
        this.peso = _peso;
    }

    public getPeso(){
        return this.peso;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getCor() {
        return this.cor;
    }

    public setPlaca(_placa: string): void {
        this.placa = _placa; 
    }

    public getPlaca(){
        return this.placa;
    }

    public setCidade(_cidade: string): void {
        this.cidade = _cidade;
    }

    public getCidade(){
        return this.cidade;
    }

    public setAno(_ano: string): void {
        this.ano = _ano;
    }

    public getAno(){
        return this.ano;
    }

}