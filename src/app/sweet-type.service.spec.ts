import { TestBed } from '@angular/core/testing';

import { SweetTypeService } from './sweet-type.service';

describe('SweetTypeService', () => {
  let service: SweetTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
