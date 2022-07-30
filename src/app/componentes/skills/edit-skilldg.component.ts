import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skilldg } from 'src/app/model/skilldg';
import { ServiceSkilldgService } from 'src/app/servicios/service-skilldg.service';

@Component({
  selector: 'app-edit-skilldg',
  templateUrl: './edit-skilldg.component.html',
  styleUrls: ['./edit-skilldg.component.css']
})
export class EditSkilldgComponent implements OnInit {
  skilldg : Skilldg = null;

  constructor(private serviceSkilldg: ServiceSkilldgService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceSkilldg.detail(id).subscribe(
      data => {
        this.skilldg = data;
      }, err => {
        alert("Error al intentar modificar skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceSkilldg.update(id, this.skilldg).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al intentar modificar skill");
        this.router.navigate(['']);
      }
    )
  }

}
