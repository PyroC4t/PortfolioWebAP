import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { ServiceEducacionService } from 'src/app/servicios/service-educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];

  constructor(private serviceEducacion: ServiceEducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.serviceEducacion.lista().subscribe(data =>{this.edu = data});
  }

  delete(id?: number) {
    if(id != undefined){
      this.serviceEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("no se puede borrar la educacion")
        }
      )
    }
  }

}
