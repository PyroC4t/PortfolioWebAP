import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsdevComponent } from './skillsdev.component';

describe('SkillsdevComponent', () => {
  let component: SkillsdevComponent;
  let fixture: ComponentFixture<SkillsdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsdevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
