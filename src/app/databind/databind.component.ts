import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrl: './databind.component.css'
})
export class DatabindComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {

  }
  dynName:string="Shikar"
  myMethod(){
    return "My Channel name is"+this.dynName
  }

  enable:boolean=false;
  x:boolean=false;
  status1="Online";
  status2="Offline";

}
