import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products: Product[];
  data: Product;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProducts().subscribe((product) => {
      this.products = product;
    });
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id).subscribe((data) => {
      this.products = this.products.filter(item => item.id != data.id)
    })
  }
}
