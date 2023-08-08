import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) {}
  // register
  register(
    firstname:any,
    lastname:any,
    email:any,
    mobile:any,
    dob:any,
    gender:any,
    address:any,
    course:any){

      const body={
        firstname,
        lastname,
        email,
        mobile,
        dob,
        gender,
        address,
        course

      }
      return this.http.post('http://localhost:2000/register',body)
  }

  details(){
    return this.http.get('http://localhost:2000/view')
  }

}
