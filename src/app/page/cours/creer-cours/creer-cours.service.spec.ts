import { TestBed } from '@angular/core/testing';

import { CreerCoursService } from './creer-cours.service';

describe('CreerCoursService', () => {
  let service: CreerCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreerCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
