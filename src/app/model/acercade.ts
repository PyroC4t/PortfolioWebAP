export class Acercade {
    id? : number;
    tituloAc : string;
    descripcionAc : string;
    linkiAc : string;
    linkgAc : string;
    linklAc : string;
    imgAc : string;

    constructor(tituloAc : string, descripcionAc : string, linkiAc : string, linkgAc: string, linklAc: string, imgAc: string){
        this.tituloAc = tituloAc;
        this.descripcionAc = descripcionAc;
        this.linkiAc = linkiAc;
        this.linkgAc = linkgAc;
        this.linklAc = linklAc;
        this.imgAc = imgAc;
    }
}
