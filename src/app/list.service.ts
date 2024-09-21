import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private formData:any

  constructor() {}
  
  setFormData (data:any){
    this.formData=data
    console.log(this.formData,'data');
    
  }

  getFormData(){
    return this.formData;
  }


}
