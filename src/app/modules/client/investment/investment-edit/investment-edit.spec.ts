import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentEdit } from './investment-edit';

describe('InvestmentEdit', () => {
  let component: InvestmentEdit;
  let fixture: ComponentFixture<InvestmentEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
