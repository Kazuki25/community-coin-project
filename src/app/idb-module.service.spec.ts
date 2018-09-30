import { TestBed } from '@angular/core/testing';

import { IdbModuleService } from './idb-module.service';

describe('IdbModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdbModuleService = TestBed.get(IdbModuleService);
    expect(service).toBeTruthy();
  });
});
