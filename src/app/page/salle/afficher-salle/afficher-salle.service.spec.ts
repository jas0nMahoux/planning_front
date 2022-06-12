import { TestBed } from '@angular/core/testing';

import { AfficherSalleService } from './afficher-salle.service';

describe('AfficherSalleService', () => {
  let service: AfficherSalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherSalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
