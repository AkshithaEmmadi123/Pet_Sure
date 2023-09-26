import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.css']
})
export class PetformComponent {


  petform = new FormGroup({
    pet_name: new FormControl('', [Validators.required]),
    pet_species: new FormControl('', [Validators.required]),
    pet_gender: new FormControl('', [Validators.required]),
    pet_breed: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  
  });
 
 
  constructor(private router: Router) {}
  next()
  {
    if (this.petform.valid){
    this.router.navigate(['/insuranceform']);
    }
    else{
      console.log("Enter the required fields");
    }
    
  }
 
}


