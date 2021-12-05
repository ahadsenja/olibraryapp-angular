import { TestBed } from '@angular/core/testing';

import { PublihserService } from './publihser.service';

describe('PublihserService', () => {
  let service: PublihserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublihserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
