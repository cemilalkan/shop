import { Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }


  getProduct(categoryId): Observable<Product[]> {
    let newPath = this.path
    if (categoryId) {
      newPath += "?categoryId=" + categoryId;
    }
    return this.http.get<Product[]>(newPath).pipe();
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ""
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir Hata Oluştu " + err.error.message

    }
    else {
      errorMessage = "Sistemsel Bir Hata Oluştu"

    }
    return throwError(errorMessage)
  }
}
