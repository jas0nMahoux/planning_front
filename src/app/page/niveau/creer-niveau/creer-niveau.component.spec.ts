import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerNiveauComponent } from './creer-niveau.component';

describe('CreerNiveauComponent', () => {
  let component: CreerNiveauComponent;
  let fixture: ComponentFixture<CreerNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
