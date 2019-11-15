import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { DishComponent } from './dish/dish.component';
import { ButtonComponent } from './button/button.component';
import { OrderComponent } from './order/order.component';
import { PopOrderComponent } from './pop-order/pop-order.component';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';
import { ReadyComponent } from './ready/ready.component';
import { UserComponent } from './user/user.component';
import { FinalComponent } from './final/final.component';
import { PaypalComponent } from './paypal/paypal.component';
import { MenuComponent } from './menu/menu.component';
import { InputMaskAngularModule } from 'input-mask-angular';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PopularComponent,
    DishComponent,
    ButtonComponent,
    OrderComponent,
    PopOrderComponent,
    SearchPipe,
    SearchComponent,
    ReadyComponent,
    UserComponent,
    FinalComponent,
    PaypalComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
