import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpStatus, Iproducts } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productId!: number;
  selectedProduct!: Iproducts;
  constructor(private _route: ActivatedRoute, private _productService: ProductsService, private _router: Router) { }

  ngOnInit(): void {
    this.productId= +this._route.snapshot.params['productsId']
    this.selectedProduct= this._productService.getSingleProd(this.productId)!
  }

  onUpdateProduct(pname: HTMLInputElement, pstatus: HTMLSelectElement){
    let obj: Iproducts={
      pName: pname.value,
      pStatus: pstatus.value as IpStatus,
      pid: this.productId
    };
    this._productService.updateProduct(obj)
    this._router.navigate(['products', this.productId])
  }

}
