export class acerca {
    id?: number;
    titulo: string;
    descripcion: string;
    img: string;

    constructor(titulo: string,descripcion: string,img: string) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
    }
}