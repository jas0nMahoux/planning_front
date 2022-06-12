import { TestBed } from '@angular/core/testing';

import { AfficherEleveService } from './afficher-eleve.service';

describe('AfficherEleveService', () => {
  let service: AfficherEleveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherEleveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
