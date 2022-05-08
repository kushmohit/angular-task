import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-child',
  templateUrl: './right-child.component.html',
  styleUrls: ['./right-child.component.css']
})
export class RightChildComponent implements OnInit {
  @Input() dataarray: any[];
  @Output() messageEventright = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  todelete(x){
    this.dataarray.splice(x,1);
  }

  toedit(x){
    this.messageEventright.emit({data:this.dataarray[x],index:x});
  }
}
