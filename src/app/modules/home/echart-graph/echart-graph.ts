import { Component, Input } from '@angular/core';
import { NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts';
@Component({
  selector: 'app-echart-graph',
  imports: [
    NgxEchartsModule
  ],
  templateUrl: './echart-graph.html',
  styleUrl: './echart-graph.scss',
  providers: [
    [provideEchartsCore({ echarts })]
  ]
})
export class EchartGraph {

  chartOptions: echarts.EChartsOption;
  
  @Input()
  data: any[];
  
  @Input()
  chartType: 'line' | 'bar';
  ngOnChanges(){
    this.chartOptions = {
      xAxis: {
        type: 'category',
        data: this.data.map(a => a.name)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: this.data.map(a => a.value),
          type: this.chartType
        }
      ]
    };
  }
}
