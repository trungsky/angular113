import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API: string = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  getDetailProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API, product);
  }

  removeProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }
}
