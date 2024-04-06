import { Component, OnInit } from '@angular/core';
import { eventNames } from 'process';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrl: './eventbind.component.css'
})
export class EventbindComponent {
  constructor(){}


   msg:String="";
  onAddCart(event:any){
  this.msg=  event.target.value+" Added in Cart";
  }
  onInputClick(event: any){
    console.log(event.target.value);

  }

  getInputInfo(inputInfo:any){
    console.log(inputInfo.value);
  }
}
