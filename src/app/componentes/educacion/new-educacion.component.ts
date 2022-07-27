import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ServiceEducacionService } from 'src/app/servicios/service-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEdu: string = '';
  institutoEdu: string = '';
  tituloEdu: string = '';
  periodoEdu: string = '';
  imgEdu: string = '';

  constructor(private serviceEducacion: ServiceEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombreEdu, this.institutoEdu, this.tituloEdu, this.periodoEdu, this.imgEdu);
    this.serviceEducacion.save(edu).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

}
