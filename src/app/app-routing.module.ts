import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  {path:'success',component:SuccessComponent},
  {path:'error',component:ErrorComponent},
  {path:'recharge',component:RechargeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
