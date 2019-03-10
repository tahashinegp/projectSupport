import { TestBed } from '@angular/core/testing';

import { DepeartmentService } from './depeartment.service';

describe('DepeartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepeartmentService = TestBed.get(DepeartmentService);
    expect(service).toBeTruthy();
  });
});
