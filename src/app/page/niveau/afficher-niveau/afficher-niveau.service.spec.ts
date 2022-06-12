import { TestBed } from '@angular/core/testing';

import { AfficherNiveauService } from './afficher-niveau.service';

describe('AfficherNiveauService', () => {
  let service: AfficherNiveauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherNiveauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
