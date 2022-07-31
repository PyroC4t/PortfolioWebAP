import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ServiceUserService } from 'src/app/servicios/service-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  nombreUser: string = '';
  apellidoUser: string = '';
  imgUser: string = '';

  constructor(private serviceUser: ServiceUserService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const use = new User(this.nombreUser, this.apellidoUser, this.imgUser);
    this.serviceUser.save(use).subscribe(
      data => {
        alert("Usuario añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

}
