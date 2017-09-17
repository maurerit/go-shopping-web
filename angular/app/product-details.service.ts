import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Product } from './product';
import { environment } from '../environments/environment';

@Injectable()
export class ProductDetailsService {

  constructor(private http: Http) { }

  findByProductId(productId: number): Promise<Product> {
    return this.http.get(`${environment.apiBase}v1/commerce/products/${productId}`)
      .toPromise()
      .then(res => res.json() as Product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
