import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { ServiceAcercadeService } from 'src/app/servicios/service-acercade.service';

@Component({
  selector: 'app-new-acercade',
  templateUrl: './new-acercade.component.html',
  styleUrls: ['./new-acercade.component.css']
})
export class NewAcercadeComponent implements OnInit {
  tituloAc: string = '';
  descripcionAc: string = '';
  linkiAc: string = '';
  linkgAc: string = '';
  linklAc: string = '';
  imgAc: string = '';

  constructor(private serviceAcercade: ServiceAcercadeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const acercadm = new Acercade(this.tituloAc, this.descripcionAc, this.linkiAc, this.linkgAc, this.linklAc, this.imgAc);
    this.serviceAcercade.save(acercadm).subscribe(
      data => {
        alert("Informacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

}
