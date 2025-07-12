import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Data } from '../../../core/services/data';
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

  fg: FormGroup;
  investments: any[];
  constructor(
    private dataService: Data,
    private dialog: MatDialog
  ) {}

  ngOnInit(){
    this.formInitialize();
    this.getInvestments();
  }

  formInitialize(){
    this.fg = new FormGroup({
      assetType: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      purchasePrice: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
    })
  }

  submit(){
    console.log(this.fg.value);
    
    if(this.fg.invalid){
      return
    }

    const formValues = Object.assign({}, this.fg.value);
    if(!confirm('Asset Type: '+ formValues.assetType + ', Quantity: '+formValues.quantity +', Purchase Price: '+formValues.purchasePrice +', Date: '+ formValues.date)){
      return
    }
    this.dataService.saveInvestment(formValues).subscribe(res => {
      if(res.message == 'Saved Successfully'){
        this.fg.reset();
        this.getInvestments();
      }
    })
  }

  getInvestments(){
    this.dataService.getInvestments().subscribe(res => {
      console.log(res);
      
      this.investments = res;
    })
  }
}
