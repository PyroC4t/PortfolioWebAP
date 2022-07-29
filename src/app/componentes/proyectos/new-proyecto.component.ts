import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ServiceProyectoService } from 'src/app/servicios/service-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombrePro: string = '';
  descripcionPro: string = '';
  enlacesitePro: string = '';
  enlacerepoPro: string = '';
  imgPro: string = '';

  constructor(private serviceProyecto: ServiceProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new Proyecto(this.nombrePro, this.descripcionPro, this.enlacesitePro, this.enlacerepoPro, this.imgPro);
    this.serviceProyecto.save(pro).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

}
