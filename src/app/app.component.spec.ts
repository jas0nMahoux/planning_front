import { TestBed } from '@angular/core/testing';
import { PlanningComponent } from './planning/planning.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PlanningComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PlanningComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'planning'`, () => {
    const fixture = TestBed.createComponent(PlanningComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('planning');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PlanningComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('planning app is running!');
  });
});
