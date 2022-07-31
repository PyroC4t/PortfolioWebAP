import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ServiceUserService } from 'src/app/servicios/service-user.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User[] = [];

  constructor(private serviceUser: ServiceUserService, private router: Router, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarUser();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }
  
  cargarUser(): void {
    this.serviceUser.lista().subscribe(data => {this.user = data});
  }

  delete(id?: number){
    if(id != undefined){
      this.serviceUser.delete(id).subscribe(
        data => {
          this.cargarUser();
        }, err => {
          alert("No se pudo borrar el usuario");
        }
      )
    }
  }
  
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
