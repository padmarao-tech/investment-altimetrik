import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Data } from '../../../../core/services/data';

@Component({
  selector: 'app-investment-edit',
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './investment-edit.html',
  styleUrl: './investment-edit.scss'
})
export class InvestmentEdit {

  fg: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<InvestmentEdit>,
    @Inject((MAT_DIALOG_DATA)) public data: any,
    private dataService: Data
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formInitialize();
    if(this.data){
      this.formExisting();
    }
  }
  
  formInitialize(){
    this.fg = new FormGroup({
      assetType: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      purchasePrice: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
    })
  }

  formExisting(){
    this.fg = new FormGroup({
      assetType: new FormControl(this.data.assetType, Validators.required),
      quantity: new FormControl(this.data.quantity, Validators.required),
      purchasePrice: new FormControl(this.data.purchasePrice, Validators.required),
      date: new FormControl(this.data.date, Validators.required),
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
        this.dialogRef.close(res);
      }
    })
  }


  close(){
    this.dialogRef.close();
  }
}
