import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private formDataArray:any[]=[];


  
  setFormData (formData:any){
    this.formDataArray.push(formData)
    console.log(this.formDataArray);

    


  }

  getFormData():any[] {
    return this.formDataArray;
  }


}
