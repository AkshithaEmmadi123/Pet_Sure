import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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


  showPaymentMethods: boolean = false;

  togglePaymentMethods() {
    this.showPaymentMethods = !this.showPaymentMethods;
  }

}
