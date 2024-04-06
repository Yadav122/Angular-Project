import { Component, OnInit } from '@angular/core';
import { MessageService } from '../appServices/message.service';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.css'
})
export class Card2Component implements OnInit {

  constructor(private  _msgService:DesignutilityService){}
  ngOnInit(): void {
      this.Product=this._msgService.products;
  }
  Product={};
  messageClick(){
    // const msgComponent = new MessageService();
    // msgComponent.messageAlert();

    this._msgService.messageAlert();

  }

}
