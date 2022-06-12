import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCoursComponent } from './creer-cours.component';

describe('CreerCoursComponent', () => {
  let component: CreerCoursComponent;
  let fixture: ComponentFixture<CreerCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
