import { Component, OnInit ,OnDestroy} from '@angular/core';
import { AppserService } from '../appser.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit,OnDestroy {

  datastore=[];
  constructor(private serv:AppserService) { }

index=-1;
data
  ngOnInit(): void {
  }

  messageEvent(event){
     const msgData=event;
     console.log(this.datastore,event,this.index);
     if(this.index==-1){
      
      this.datastore.push(msgData);
     }else{
      this.datastore=  this.datastore.map((obj,i)=>{
         if(i==this.index) {return {task:msgData.task,taskdetails:msgData.taskdetails}}
          else {return{...obj}}
        })
        
       this.index=-1;
     }
  }
  messageEventright(event){
this.index=event.index;
this.data=event.data;
  }

  ngOnDestroy(): void {
    this.serv.title.emit();
    this.serv.login.emit('login');
  }
}
