import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewquoteComponent } from './newquote/newquote.component';
import { PetformComponent } from './petform/petform.component';
import { InsuranceformComponent } from './insuranceform/insuranceform.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'',component:NewquoteComponent},
  {path:'newquote',component:NewquoteComponent},
  {path:'petform',component:PetformComponent},
  {path:'insuranceform',component:InsuranceformComponent},
  {path:'userupdate', component:UserupdateComponent},
  {path:'paymentform',component:PaymentformComponent},
  {path: 'success',component:SuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
