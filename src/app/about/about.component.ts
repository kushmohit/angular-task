import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AppserService } from '../appser.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  loginpage: FormGroup;
  error: boolean;
  constructor(private router: Router,private serv:AppserService,
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
      this.serv.title.emit(this.loginpage.value.username);
      this.serv.login.emit("logout");
    }
    else{
      this.error=true
    }


  }
}
