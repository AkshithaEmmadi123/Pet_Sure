import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  // selectedAnimal: string = ''; 
  // selectedBreed: string = '';   
  // breedOptions: string[] = [];

 

  // onSelectAnimalChange() {
  //   if (this.selectedAnimal === 'dog') {
  //     this.breedOptions = ['Labrador', 'German Shepherd', 'Golden Retriever'];
  //   } else if (this.selectedAnimal === 'cat') {
  //     this.breedOptions = ['Siamese', 'Persian', 'Maine Coon'];
  //   } else {
  //     this.breedOptions = []; 
  //   }
  // }


  // showPaymentMethods: boolean = false;

  // togglePaymentMethods() {
  //   this.showPaymentMethods = !this.showPaymentMethods;
  // }





  
  paymentMethods = [
    {
      name: 'Credit Card',
      imageUrl: '../../assets/Images/credit-card.png'
    },
    {
      name: 'PayPal',
      imageUrl: '../../assets/Images/paypal.png'
    },
    {
      name: 'Bank Transfer',
      imageUrl: '../../assets/Images/bank-transfer.png'
    }
  ];

  selectPaymentMethod(method: any) {
    // Handle the selected payment method here
    console.log('Selected payment method:', method.name);
    // You can implement further logic, such as showing a payment form, here.
  }
  paymentForm: FormGroup; // Create a FormGroup
  
  constructor(private formBuilder: FormBuilder) {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]], // 16-digit card number
      expiration: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]], // MM/YY format
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]] // 3-digit CVV
    });
  }

  processPayment() {
    if (this.paymentForm.valid) {
      
      console.log('Processing payment:', this.paymentForm.value);
    } else {
      
      console.log('Form is invalid. Please correct the errors.');
    }
  }

  showPaymentMethods: boolean = false;

   togglePaymentMethods() {
     this.showPaymentMethods = !this.showPaymentMethods;
   }

  
}
