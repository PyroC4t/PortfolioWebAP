export class Educacion {
    id?: number;
    nombreEdu: string;
    institutoEdu: string;
    tituloEdu: string;
    periodoEdu: string;
    imgEdu: string;

    constructor(nombreEdu: string, institutoEdu: string, tituloEdu: string, periodoEdu: string, imgEdu: string){
        this.nombreEdu = nombreEdu;
        this.institutoEdu = institutoEdu;
        this.tituloEdu = tituloEdu;
        this.periodoEdu = periodoEdu;
        this.imgEdu = imgEdu;
    }
}
