import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { Data } from '../../../core/services/data';
import { InvestmentEdit } from './investment-edit/investment-edit';
@Component({
  selector: 'app-investment',
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Materials
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule
  ],
  templateUrl: './investment.html',
  styleUrl: './investment.scss'
})
export class Investment {

  investments: any[];
  constructor(
    private dataService: Data,
    private dialog: MatDialog
  ) {}

  ngOnInit(){
    this.getInvestments();
  }

  getInvestments(){
    this.dataService.getInvestments().subscribe(res => {
      this.investments = res;
    })
  }

  addInvestment(data: any){
    const dialogConf: MatDialogConfig = {
      width: '400px',
      data: data
    }
    const dialog = this.dialog.open(InvestmentEdit, data)
    dialog.afterClosed().subscribe(res => {
      if(res.message == 'Saved Successfully'){
        this.getInvestments();
      }
    })
  }
}
