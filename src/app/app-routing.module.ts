import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

{
  path : 'addaccount',
  component: AddaccountComponent
},
{
  path: 'checkbalance',
  component : CheckbalanceComponent
},
{
  path :'payment',
  component: PaymentComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
