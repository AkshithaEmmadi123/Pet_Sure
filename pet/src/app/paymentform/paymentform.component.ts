import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent {
  paymentForm: FormGroup; // Create a FormGroup
  savedCards: any[] = [];
  constructor(private formBuilder: FormBuilder) {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]], // 16-digit card number
      expiration: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]], // MM/YY format
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]] // 3-digit CVV
    });
  }

  // processPayment() {
  //   if (this.paymentForm.valid) {
      
  //     console.log('Processing payment:', this.paymentForm.value);
  //   } else {
      
  //     console.log('Form is invalid. Please correct the errors.');
  //   }
  // }

  showPaymentMethods: boolean = false;

   togglePaymentMethods() {
     this.showPaymentMethods = !this.showPaymentMethods;
   }

   closePaymentForm() {
    this.showPaymentMethods = false;
  }





  processPayment() {
    if (this.paymentForm.valid) {
      // Assuming you have a card object to save.
      const card = {
        cardNumber: this.paymentForm.value.cardNumber,
      };

      // Add the card to your list of saved cards.
      this.savedCards.push(card);

      // You can also clear the form if needed.
      this.paymentForm.reset();
    }
  }
}
