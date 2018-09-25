import { TestBed } from '@angular/core/testing';

import { EtherModuleService } from './ether-module.service';

describe('EtherModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtherModuleService = TestBed.get(EtherModuleService);
    expect(service).toBeTruthy();
  });
});
