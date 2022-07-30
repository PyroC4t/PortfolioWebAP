export class Skilldg {
    id?: number;
    nombreSkill: string;
    porcentajeSkill: string;
    imgSkill: string;

    constructor(nombreSkill: string, porcentajeSkill: string, imgSkill: string){
        this.nombreSkill = nombreSkill;
        this.porcentajeSkill = porcentajeSkill;
        this.imgSkill = imgSkill;
    }
}
