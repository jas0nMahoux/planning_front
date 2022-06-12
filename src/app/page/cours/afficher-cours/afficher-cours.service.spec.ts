import { TestBed } from '@angular/core/testing';

import { AfficherCoursService } from './afficher-cours.service';

describe('AfficherCoursService', () => {
  let service: AfficherCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
