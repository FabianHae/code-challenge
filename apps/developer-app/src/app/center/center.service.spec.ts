import { TestBed } from '@angular/core/testing';

import { CenterService } from './center.service';
//TODO IMPORTANT!!!! WRITE TEST FOR THIS SERVICE
describe('CenterService', () => {
  let service: CenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
