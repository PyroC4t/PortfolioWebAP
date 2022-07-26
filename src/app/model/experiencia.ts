export class Experiencia {
    id? : number;
    nombreExp: string;
    empresaExp: string;
    cargoExp: string;
    descripcionExp: string;
    imgExp: string;

    constructor(nombreExp: string, empresaExp: string, cargoExp: string, descripcionExp: string, imgExp: string){
        this.nombreExp = nombreExp;
        this.empresaExp =empresaExp;
        this.cargoExp = cargoExp;
        this.descripcionExp = descripcionExp;
        this.imgExp = imgExp;
    }

}
