import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {

  isVaild:boolean=false;

  onCreateBlock(){
    this.isVaild=true;
  }
}
