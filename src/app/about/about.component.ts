import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  loginpage: FormGroup;
  error: boolean;
  constructor(private router: Router,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginpage=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  submit(){

    if(this.loginpage.value.username=='admin' && this.loginpage.value.password=='admin'){
      this.router.navigate(['work']);
    }
    else{
      this.error=true
    }
    

  }
}
