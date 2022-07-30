import { Component, OnInit } from '@angular/core';
import { Skilldev } from 'src/app/model/skilldev';
import { ServiceSkilldevService } from 'src/app/servicios/service-skilldev.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skillsdev',
  templateUrl: './skillsdev.component.html',
  styleUrls: ['./skillsdev.component.css']
})
export class SkillsdevComponent implements OnInit {
  skidev: Skilldev[] = [];

  constructor(private serviceSkilldev: ServiceSkilldevService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkilldev();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarSkilldev(): void {
    this.serviceSkilldev.lista().subscribe(data => {this.skidev = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.serviceSkilldev.delete(id).subscribe(
        data => {
          this.cargarSkilldev();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }

}
