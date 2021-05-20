import { TestBed } from '@angular/core/testing';

import { VendingMachineService } from './vending-machine.service';

describe('VendingMachineService', () => {
  let service: VendingMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendingMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('purchase 1 can with 2$', () => {
    service.purchase({cans: 1, cash: 2});
    service.supply$.subscribe(supply => {
      expect(supply).toBe(9);
    });
    service.info$.subscribe(message => {
      expect(message).toBe('Return 1 with 0.80 cash');
    });
    service.error$.subscribe(message => {
      expect(message).toBe('');
    });
  });

  it('purchase 1 can with 1$', () => {
    service.purchase({cans: 1, cash: 1});
    service.supply$.subscribe(supply => {
      expect(supply).toBe(10);
    });
    service.info$.subscribe(message => {
      expect(message).toBe('');
    });
    service.error$.subscribe(message => {
      expect(message).toBe('Insufficient money');
    });
  });

  it('should show Out of stock', () => {
    service.updateSupply(1);
    service.purchase({cans: 1, cash: 2});
    service.purchase({cans: 1, cash: 1.5});
    service.supply$.subscribe(supply => {
      expect(supply).toBe(0);
    });
    service.info$.subscribe(message => {
      expect(message).toBe('');
    });
    service.error$.subscribe(message => {
      expect(message).toBe('Out of stock');
    });
  });

  it('should resupply with new value', () => {
    service.updateSupply(20);

    service.supply$.subscribe(supply => {
      expect(supply).toBe(20);
    });
    service.info$.subscribe(message => {
      expect(message).toBe('Resupplied with 20 cans');
    });
    service.error$.subscribe(message => {
      expect(message).toBe('');
    });
  });

  it('Ran out, resupply, purchase', () => {
    service.updateSupply(1);
    service.purchase({cans: 1, cash: 1.2});
    service.updateSupply(10);

    service.purchase({cans: 3, cash: 5});

    service.supply$.subscribe(supply => {
      expect(supply).toBe(7);
    });
    service.info$.subscribe(message => {
      expect(message).toBe('Return 3 with 1.40 cash');
    });
    service.error$.subscribe(message => {
      expect(message).toBe('');
    });
  });

});
