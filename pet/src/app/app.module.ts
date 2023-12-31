import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewquoteComponent } from './newquote/newquote.component';
import { PetformComponent } from './petform/petform.component';
import { InsuranceformComponent } from './insuranceform/insuranceform.component';
import { DetailsComponent } from './details/details.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentformComponent } from './paymentform/paymentform.component';
import {MatRadioModule} from '@angular/material/radio';
import { SuccessComponent } from './success/success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { MatError } from '@angular/material/form-field';
import { Test2Component } from './test2/test2.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NewquoteComponent,
    PetformComponent,
    InsuranceformComponent,
    DetailsComponent,
    UserupdateComponent,
    PaymentformComponent,
    SuccessComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
   
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
