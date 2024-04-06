import { Component, OnInit } from '@angular/core';
import { MessageService } from '../appServices/message.service';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.css'
})
export class Card1Component implements OnInit {


  ngOnInit(): void {
    this.products=this._mySercives.products.name;
}
  constructor(private _mySercives:DesignutilityService){}
  // products="test"
  products={}
  btnClick(){
//  const MsgService = new MessageService();
//   MsgService.messageAlert()
this._mySercives.messageAlert();
  }
}
