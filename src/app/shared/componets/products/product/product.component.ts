import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId!: number;
  productObj!: Iproducts;
  constructor(private _route: ActivatedRoute, private _productService: ProductsService) { }

  ngOnInit(): void {
    this.productId= +this._route.snapshot.params['id']
    console.log(this.productId)
    this.productObj= this._productService.getSingleProd(this.productId)!
    console.log(this.productObj);
    
  }

}
