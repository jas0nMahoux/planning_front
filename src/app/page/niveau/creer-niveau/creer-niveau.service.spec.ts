import { TestBed } from '@angular/core/testing';

import { CreerNiveauService } from './creer-niveau.service';

describe('CreerNiveauService', () => {
  let service: CreerNiveauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreerNiveauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
