import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skilldg } from 'src/app/model/skilldg';
import { ServiceSkilldgService } from 'src/app/servicios/service-skilldg.service';

@Component({
  selector: 'app-new-skilldg',
  templateUrl: './new-skilldg.component.html',
  styleUrls: ['./new-skilldg.component.css']
})
export class NewSkilldgComponent implements OnInit {
  nombreSkill: string= '';
  porcentajeSkill: string= '';
  imgSkill: string= '';

  constructor(private serviceSkilldg: ServiceSkilldgService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const ski = new Skilldg(this.nombreSkill, this.porcentajeSkill, this.imgSkill);
    this.serviceSkilldg.save(ski).subscribe(
      data =>{
        alert("Skill añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

}
