import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skilldev } from 'src/app/model/skilldev';
import { ServiceSkilldevService } from 'src/app/servicios/service-skilldev.service';

@Component({
  selector: 'app-new-skilldev',
  templateUrl: './new-skilldev.component.html',
  styleUrls: ['./new-skilldev.component.css']
})
export class NewSkilldevComponent implements OnInit {
  nombreSkidev: string= '';
  porcentajeSkidev: string= '';
  iconSkidev: string= '';

  constructor(private serviceSkilldev: ServiceSkilldevService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skidev = new Skilldev(this.nombreSkidev, this.porcentajeSkidev, this.iconSkidev);
    this.serviceSkilldev.save(skidev).subscribe(
      data => {
        alert("Skill añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error");
        this.router.navigate(['']);
      }
    )
  }

}
