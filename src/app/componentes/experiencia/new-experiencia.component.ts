import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServiceExperienciaService } from 'src/app/servicios/service-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  empresaExp: string = '';
  cargoExp: string = '';
  descripcionExp: string = '';
  imgExp: string = '';

  constructor(private serviceExperiencia: ServiceExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreExp, this.empresaExp, this.cargoExp, this.descripcionExp, this.imgExp);
    this.serviceExperiencia.save(exp).subscribe(
      data => {
        alert("Experiencia agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

}
