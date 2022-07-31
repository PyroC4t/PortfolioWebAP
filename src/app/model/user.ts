export class User {
    id?: number;
    nombreUser: string;
    apellidoUser: string;
    imgUser: string;

    constructor(nombreUser: string, apellidoUser: string, imgUser: string){
        this.nombreUser = nombreUser;
        this.apellidoUser = apellidoUser;
        this.imgUser = imgUser;
    }
}
