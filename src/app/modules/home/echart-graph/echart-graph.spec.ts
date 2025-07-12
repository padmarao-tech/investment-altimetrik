import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartGraph } from './echart-graph';

describe('EchartGraph', () => {
  let component: EchartGraph;
  let fixture: ComponentFixture<EchartGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EchartGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
