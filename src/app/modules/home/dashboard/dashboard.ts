import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgxEchartsDirective, NgxEchartsModule, provideEchartsCore } from 'ngx-echarts';
import { Data } from '../../../core/services/data';
import { EchartGraph } from "../echart-graph/echart-graph";

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    EchartGraph
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  
})
export class Dashboard {
  
  datePurchase: any[];
  dateQuantity: any[];
  constructor(private dataService: Data){}
  ngOnInit(){
    this.getInvestments()
  }
  
  getInvestments(){
    this.dataService.getInvestments().subscribe(res => {
      console.log(res);
      
      const investments = res;
      if(investments && investments.length > 0){
        this.datePurchase = investments.map(val => {
          let data = {
            name: val.date,
            value: val.purchasePrice
          }
          return data
        })
        this.dateQuantity = investments.map(val => {
          let data = {
            name: val.date,
            value: val.quantity
          }
          return data
        })
      }
    })
  }
}

