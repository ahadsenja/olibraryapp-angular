import { TestBed } from '@angular/core/testing';

import { BookreturnService } from './bookreturn.service';

describe('BookreturnService', () => {
  let service: BookreturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookreturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
