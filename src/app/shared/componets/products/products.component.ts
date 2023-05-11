import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../model/products';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productInfo: Array<Iproducts>= []
  selectProdid!: number 

  constructor(private _productsService: ProductsService, private _router: Router) { }

  ngOnInit(): void {
    this.productInfo = this._productsService.getAllProducts()
    this.selectProdid= this.productInfo[0].pid
  }

  goToUsers(){
    this._router.navigate(["/users"])
  }

}
