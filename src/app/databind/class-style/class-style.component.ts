import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrl: './class-style.component.css'
})
export class ClassStyleComponent {

  mypro:boolean=false;
  myStyle1:string="15px";
  isActive:boolean=false;
  mltClass={
    class1:true,class2:true , class3:true
  }

  mltStyle={
    'background':'green',
    'border':'10px, solid ,red'
  }
}
