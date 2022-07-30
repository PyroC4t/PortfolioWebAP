export class Skilldev {
    id? : number;
    nombreSkidev: string;
    porcentajeSkidev: string;
    iconSkidev: string;

    constructor(nombreSkidev: string, porcentajeSkidev: string, iconSkidev: string){
        this.nombreSkidev = nombreSkidev;
        this.porcentajeSkidev = porcentajeSkidev;
        this.iconSkidev = iconSkidev;
    }
}
