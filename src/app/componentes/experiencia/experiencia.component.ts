import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ServiceExperienciaService } from 'src/app/servicios/service-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  exp: Experiencia[] = [];

  constructor(private serviceExperiencia: ServiceExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.serviceExperiencia.lista().subscribe(data => {this.exp = data});
  }

  delete(id?: number){
    if(id !=undefined){
      this.serviceExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
