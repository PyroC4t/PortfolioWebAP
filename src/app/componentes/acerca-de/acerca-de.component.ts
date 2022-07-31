import { Component, OnInit } from '@angular/core';
import { acerca } from 'src/app/model/acerca.model';
import { Acercade } from 'src/app/model/acercade';
import { AcercaService } from 'src/app/servicios/acerca.service';
import { ServiceAcercadeService } from 'src/app/servicios/service-acercade.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acercade: Acercade = new Acercade ("","","","","","");

  constructor(private serviceAcercade: ServiceAcercadeService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarAcercade();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcercade(): void {
    this.serviceAcercade.lista().subscribe(data => {this.acercade = data});
  }

  delete(id?: number){
    if(id != undefined){
      this.serviceAcercade.delete(id).subscribe(
        data => {
          this.cargarAcercade();
        }, err => {
          alert("No se pudo borrar la información");
        }
      )
    }
  }

}
