import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveHomeComponent } from './eleve-home.component';

describe('EleveHomeComponent', () => {
  let component: EleveHomeComponent;
  let fixture: ComponentFixture<EleveHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleveHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
