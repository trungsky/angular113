import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  public id: any;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

  getProduct() {
    this.productService.getDetailProduct(this.id).subscribe((product) => {
      this.product = product;
    });
  }

  onUpdateProduct() {
    this.productService.updateProduct(this.product).subscribe((product) => {
      console.log(product);
    });
  }
}
