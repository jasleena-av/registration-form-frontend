import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../api/services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  

  //Form group
  registerForm = this.registerFb.group({
    //form array
    firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    dob: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        ),
      ],
    ],
    gender: ['', Validators.required],
    address: ['',Validators.required],
    course: ['', Validators.required],


});
 


constructor(private registerFb:FormBuilder,private api:ServicesService,private registerrouter:Router){

}


register(){
  if(this.registerForm.valid){
    let fname=this.registerForm.value.firstname
    let lname=this.registerForm.value.lastname
    let email=this.registerForm.value.email
    let mobile=this.registerForm.value.mobile
    let dob=this.registerForm.value.dob
    let gender=this.registerForm.value.gender
    let addr=this.registerForm.value.address
    let course=this.registerForm.value.course

    this.api.register(fname,lname,email,mobile,dob,gender,addr,course)
    .subscribe(
      (result:any)=>{
      console.log(result);
      alert(result.message)
      setTimeout(()=>{
        // redirect to login page
      this.registerrouter.navigateByUrl('/view')
      },2000)
      
      
    }
    )

  }
  else{
    alert('Invalid form')
  }


  
}

}
  




