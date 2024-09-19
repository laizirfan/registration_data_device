import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=''
  password:string=''
  
  onsubmit(){
    if(this.email && this.password){
      
      console.log('Form submitted');
    }
    else{
      console.log('please fill correctly');
      
    }
  }
}
