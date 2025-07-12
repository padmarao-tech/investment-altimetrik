import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data {


  
  saveInvestment(data: any){
    let investments: any[];
    if(data){
      if(localStorage.getItem('investment')){
        investments = JSON.parse(localStorage.getItem('investment'));
        investments.push(data)
      }
      localStorage.setItem('investment', JSON.stringify(investments? investments: [data]));
      return of({message: 'Saved Successfully'})
    }
    return of({message: 'Failed'})
  }

  getInvestments(){
    let data = null;
    if(localStorage.getItem('investment')){
      data = JSON.parse(localStorage.getItem('investment'));
    }
    return of(data);
  }
}
