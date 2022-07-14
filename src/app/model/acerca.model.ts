export class acerca {
    id?: number;
    titulo: String;
    descripcion: String;
    img: String;

    constructor(titulo: String,descripcion: String,img: String) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
    }
}