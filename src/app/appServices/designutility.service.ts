import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }


  messageAlert(){
    alert("Thanks For Subscribe. We will get in touch with you Shortly");
  }

  products={name:"Mobile" ,id:"001"}
}
