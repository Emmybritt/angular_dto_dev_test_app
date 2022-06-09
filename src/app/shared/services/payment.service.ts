import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardDetails } from '../models/credit-card.model';
import { addDetails } from '../store/payment.action';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  details: CreditCardDetails | undefined;
}





