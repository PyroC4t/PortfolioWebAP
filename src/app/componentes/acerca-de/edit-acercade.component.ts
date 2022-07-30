import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { ServiceAcercadeService } from 'src/app/servicios/service-acercade.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  acerde : Acercade = null;

  constructor(private serviceAcercade: ServiceAcercadeService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceAcercade.detail(id).subscribe(
      data =>{
        this.acerde = data;
      }, err => {
        alert("Error al intentar modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceAcercade.update(id, this.acerde).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al intentar modificar la información");
        this.router.navigate(['']);
      }
    )
  }

}
