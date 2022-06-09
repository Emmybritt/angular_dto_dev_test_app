import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PaymentService } from './shared/services/payment.service';
import { addDetailsAction } from './shared/store/payment.action';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  form: FormGroup | undefined

    paymentDetailsForm = this.formBuilder.group({
    card_number: ['', Validators.required],
    card_holder: ['', Validators.required],
    expiration_date: ['', Validators.required],
    security_code: '',
    amount: ''
  });

  constructor(
    private formBuilder: FormBuilder, 
    private paymentService: PaymentService,
    private store: Store) { }

    initializeForm(): void {
      console.log('initializeForm');
      this.form = this.paymentDetailsForm;
      
    }
 

  onSubmit(): void {
    console.log('submit', this.form?.value, this.form?.valid);
    this.store.dispatch(addDetailsAction(this.form?.value))
    
  }

  ngOnInit(): void {
    this.initializeForm()
  }

}
