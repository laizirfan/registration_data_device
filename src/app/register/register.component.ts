import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form:FormGroup;
  selectedGender : string='';

  constructor(private fb:FormBuilder,private listservice:ListService,private router:Router){
 this.form= this.fb.group({
  country:['',Validators.required],
  gender:['',Validators.required],
 })

  }

ngOnInit(): void {
}

  fname:string=""
  date:string=""
  username:string=""
  mail:string=""
  password:string=""
  bio:string=""
  number:string=""
  password2:string=""
  gender:string=""
  


 


  finalesubmit(){
    if(this.fname && this.date &&this.username &&this.mail&& this.password===this.password2
       &&this.bio &&this.number &&this.number && this.gender ){


        const formData={
          fname:this.fname,
          email:this.mail,
          gender:this.gender,
          number:this.number,
        }
        //  sessionStorage.setItem('name',this.fname) 
        //  sessionStorage.setItem('email',this.mail) 
        //  sessionStorage.setItem('number',this.number) 
        
         this.listservice.setFormData(formData)
         this.router.navigate(['/list'])
      alert('Register complete')
      
    }
    else{
      alert('something went wrong')
    }
 
  
  }

  clearPage(){
    window.location.reload();
    alert('Page refreshed')
    
  }



}
