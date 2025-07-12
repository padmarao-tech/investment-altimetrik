import { TestBed } from '@angular/core/testing';

import { Data } from './data';

describe('Data', () => {
  let service: Data;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('saveInvestment', () => {
    const data = {
      "assetType": "Asset1",
      "quantity": 10,
      "purchasePrice": 200,
      "date": "2025-07-01"
    }
    service.saveInvestment(data).subscribe(res => {
      expect('Saved Successfully').toBe(res.message)
    })
  })

});
