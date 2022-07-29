import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Proyecto {
    id? : number;
    nombrePro: string;
    descripcionPro: string;
    enlacesitePro: string;
    enlacerepoPro: string;
    imgPro: string;

    constructor(nombrePro: string, descripcionPro: string, enlacesitePro: string, enlacerepoPro: string, imgPro: string){
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.enlacesitePro = enlacesitePro;
        this.enlacerepoPro = enlacerepoPro;
        this.imgPro = imgPro;
    }
}
