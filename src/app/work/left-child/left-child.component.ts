import { Component, EventEmitter, Input, OnInit, Output,OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-left-child',
  templateUrl: './left-child.component.html',
  styleUrls: ['./left-child.component.css']
})
export class LeftChildComponent implements OnInit ,OnChanges{
  formGrp: FormGroup;
  @Input() data: any;
  @Output() messageEvent = new EventEmitter<string>();
   
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formGrp=this.fb.group({
      
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
      
    })



  }
  ngOnChanges(): void {
    if(this.data){
      this.formGrp.patchValue({
        name:this.data.name,
        email:this.data.email
      })
    }
     
  }

  onsubmit(){
     
    this.messageEvent.emit(this.formGrp.value);
    this.formGrp.reset();
  }

}
