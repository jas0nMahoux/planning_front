import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauHomeComponent } from './niveau-home.component';

describe('NiveauHomeComponent', () => {
  let component: NiveauHomeComponent;
  let fixture: ComponentFixture<NiveauHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiveauHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
