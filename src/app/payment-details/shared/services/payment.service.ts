import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }



  addCreditCardDetails(data: any) {
    const url = environment.apiUrl;
    return this.http.post(url, data).pipe(map((response: any) => response.user));
  }

}





