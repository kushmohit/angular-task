import { Component ,OnInit} from '@angular/core';
import { AppserService } from './appser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-Task';
  buttonvalue="login";
  username="admin";

  constructor(private serv:AppserService){

  }

  ngOnInit(): void {


this.serv.title.subscribe((res)=>{
this.username=res
})
this.serv.login.subscribe((res)=>{
  this.buttonvalue=res
  })
  this.serv.setvalue();
  }


}
