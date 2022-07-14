import { Component, OnInit } from '@angular/core';
import { acerca } from 'src/app/model/acerca.model';
import { AcercaService } from 'src/app/servicios/acerca.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acerca: acerca = new acerca("","","");

  constructor(public acercaService:AcercaService) { }

  ngOnInit(): void {
    this.acercaService.getAcerca().subscribe(data => {this.acerca = data})
  }

}
