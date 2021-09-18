import { TestBed } from '@angular/core/testing';

import { DonarDataService } from './donar-data.service';

describe('DonarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonarDataService = TestBed.get(DonarDataService);
    expect(service).toBeTruthy();
  });
});
