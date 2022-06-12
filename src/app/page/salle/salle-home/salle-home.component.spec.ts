import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleHomeComponent } from './salle-home.component';

describe('SalleHomeComponent', () => {
  let component: SalleHomeComponent;
  let fixture: ComponentFixture<SalleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
