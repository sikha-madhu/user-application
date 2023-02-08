import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  info:any=''

  UserInformation = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(256)],),
    lastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(256)]),
    age: new FormControl('',[Validators.required,Validators.min(0),Validators.max(1000)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]")]),
    username:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9]+([._]?[.-]?[a-zA-Z0-9]+)*$")]),
    additiondata: new FormControl('',[Validators.required]),
    label: new FormControl('',[Validators.required]),
    value: new FormControl('',[Validators.required])
  });
  constructor() { }
  ngOnInit() {
    
  }
  callingFunction(){
    console.log(this.UserInformation);
  }
  get Firstname() {
    return this.UserInformation.get("firstName") ;
  }
  get Lastname() {
    return this.UserInformation.get("lastName") ;
  }
  get Email() {
    return this.UserInformation.get("email") ;
  }
  get phonenumber() {
    return this.UserInformation.get("phone") ;
  }
  get age() {
    return this.UserInformation.get("age") ;
  }
  get additionalinformation() {
    return this.UserInformation.get("additiondata") ;
  }
  get username() {
    return this.UserInformation.get("username") ;
  }



  // title = 'assessment16';
}
