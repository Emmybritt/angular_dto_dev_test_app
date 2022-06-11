import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentService } from './shared/services/payment.service';
import { addDetailsAction } from './shared/store/payment.action';
import { isSubmittingSelector } from './shared/store/selector';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  isSubmitting$: Observable<boolean> | undefined

    paymentDetailsForm = this.formBuilder.group({
    card_number: [
      '', 
      Validators.required, 
      Validators.minLength(16), 
    ],
    card_holder: [
      '', 
      Validators.required
    ],
    expiration_date: [
      '', 
      Validators.required
    ],
    security_code: [
      '', 
      
      Validators.required, 
      Validators.minLength(3), 
    ],
    amount: ['', Validators.required]
  });

  submited = false;

  constructor(
    private formBuilder: FormBuilder, 
    private paymentService: PaymentService,
    private store: Store) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

    initializeForm(): void {
      console.log('initializeForm');
      this.form = this.paymentDetailsForm;
      
    }

    initializeValues(): void {
      this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))

    }

   get card_number() {
    return this.paymentDetailsForm.get('card_number');
   }
   get card_holder() {
    return this.paymentDetailsForm.get('card_holder');
   }
 
   get expiration_date() {
    return this.paymentDetailsForm.get('expiration_date');
   }
   get security_code() {
    return this.paymentDetailsForm.get('security_code');
   }
   get amount() {
    return this.paymentDetailsForm.get('amount');
   }
 

  onSubmit(): void {
    this.submited = true;
      setTimeout(() => {
        this.submited = false;
      }, 3000);
    if (this.paymentDetailsForm.valid) {
      console.log('submit', this.form?.value, this.form?.valid);
      this.store.dispatch(addDetailsAction(this.form?.value))
      this.paymentService.addCreditCardDetails(this.form?.value);
    }    
  }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

}
