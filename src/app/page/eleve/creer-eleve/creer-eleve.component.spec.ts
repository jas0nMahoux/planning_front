import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerEleveComponent } from './creer-eleve.component';

describe('CreerEleveComponent', () => {
  let component: CreerEleveComponent;
  let fixture: ComponentFixture<CreerEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
