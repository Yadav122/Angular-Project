import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  statusOnline:boolean=true
  products=[{name:'laptop'},

   {name:'Mobile'}
   ,{name:'Tv'},
   {name :'Washing Machine'},
]

}
