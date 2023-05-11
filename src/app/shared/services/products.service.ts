import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productArray:Array<Iproducts> = [
    {
      pName: "Samsung 77",
      pid: 1,
      pStatus: "InProgress",
    },
    {
      pName: "Iphone 77",
      pid: 2,
      pStatus: "Dispatched",
    },
    {
      pName: "Redmi 77",
      pid: 3,
      pStatus: "Delivered",
    }
  ]

  constructor() { }

  getAllProducts(){
    return this.productArray
  }

getSingleProd(id: number){
  return this.productArray.find(prod => prod.pid===id)
}

updateProduct(pObj: Iproducts){
  this.productArray.forEach(prod =>{
    if(prod.pid=== pObj.pid){
      prod.pName= pObj.pName;
      prod.pStatus= pObj.pStatus;
    }
  })
}

}
