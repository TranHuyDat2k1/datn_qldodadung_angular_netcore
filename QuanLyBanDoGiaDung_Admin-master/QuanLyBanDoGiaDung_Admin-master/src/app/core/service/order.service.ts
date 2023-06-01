import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private _http: HttpClient) {}

  getTotalOrder(): Observable<any[]> {
    return this._http.get<any[]>(
      'https://localhost:44312/api/DonHang/get-all'
    );
  }
}
