import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllProductService {
  constructor(private http: HttpClient) {}
  getAllProduct(): Observable<any> {
    const numbers$ = of(1, 2, 3); // simple observable that emits three values
    try {
      let result = this.http.get(`'https://fakestoreapi.com/products`);
      // result = JSON.stringify(result);
      console.log(result);
       } catch (err) {
    } finally {
      console.log('getAllProduct Done!');
    }
    return numbers$;
  }
}
