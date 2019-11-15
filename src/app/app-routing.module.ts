import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DishesComponent } from './dishes/dishes.component';
import { PopularComponent } from './popular/popular.component';
import { OrderComponent } from './order/order.component';
import { ReadyComponent } from './ready/ready.component';
import { UserComponent } from './user/user.component';
import { FinalComponent } from './final/final.component';
import { PaypalComponent } from './paypal/paypal.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'dishes/:category',   component: DishesComponent },
   { path: 'order', component: OrderComponent },
   { path: 'ready', component: ReadyComponent},
   { path: 'user', component: UserComponent},
   { path: 'final', component: FinalComponent},
   { path: 'paypal', component: PaypalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
