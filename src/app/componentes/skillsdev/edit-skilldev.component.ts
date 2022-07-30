import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skilldev } from 'src/app/model/skilldev';
import { ServiceSkilldevService } from 'src/app/servicios/service-skilldev.service';

@Component({
  selector: 'app-edit-skilldev',
  templateUrl: './edit-skilldev.component.html',
  styleUrls: ['./edit-skilldev.component.css']
})
export class EditSkilldevComponent implements OnInit {
  skilldev: Skilldev = null;

  constructor(private serviceSkilldev: ServiceSkilldevService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceSkilldev.detail(id).subscribe(
      data => {
        this.skilldev = data;
      }, err => {
        alert("Error al intentar modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceSkilldev.update(id, this.skilldev).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al intentar modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

}
