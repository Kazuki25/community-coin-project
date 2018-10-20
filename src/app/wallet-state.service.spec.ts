import { TestBed } from '@angular/core/testing';

import { WalletStateService } from './wallet-state.service';

describe('WalletStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletStateService = TestBed.get(WalletStateService);
    expect(service).toBeTruthy();
  });
});
