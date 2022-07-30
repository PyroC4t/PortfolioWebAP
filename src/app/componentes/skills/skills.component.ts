import { Component, OnInit } from '@angular/core';
import { Skilldg } from 'src/app/model/skilldg';
import { ServiceSkilldgService } from 'src/app/servicios/service-skilldg.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skilldg[] = [];

  constructor(private serviceSkilldg: ServiceSkilldgService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.serviceSkilldg.lista().subscribe(data => {this.skill = data});
  }

  delete(id?: number){
    if(id != undefined){
      this.serviceSkilldg.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se puede borrar la skill");
        }
      )
    }
  }

}
