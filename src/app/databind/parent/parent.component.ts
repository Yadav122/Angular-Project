import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  selectedProducts!: String;
  productsSelected:boolean=false;
  addedProduct:any;


  onSlectProduct(product:any){
    this.productsSelected=true;
    this.selectedProducts=product
  }
  onAddProduct(){
    this.addedProduct=this.selectedProducts;
  }
  myvalue:string="uxtrendz"

}
