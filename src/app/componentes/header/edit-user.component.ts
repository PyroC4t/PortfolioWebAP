import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ServiceUserService } from 'src/app/servicios/service-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  usered : User = null;

  constructor(private serviceUser: ServiceUserService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceUser.detail(id).subscribe(
      data => {
        this.usered = data;
      }, err => {
        alert("Error al intentar modificar el usuario");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceUser.update(id, this.usered).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al intentar modificar el usuario");
        this.router.navigate(['']);
      }
    )
  }

}
