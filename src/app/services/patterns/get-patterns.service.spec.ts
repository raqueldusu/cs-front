import { TestBed } from '@angular/core/testing';

import { GetPatternsService } from './get-patterns.service';

describe('GetPatternsService', () => {
  let service: GetPatternsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPatternsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
