import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { PraticesComponent } from './pratices/pratices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    GalleryComponent,
    ContactComponent,
    AddaccountComponent,
    PaymentComponent,
    CheckbalanceComponent,
    PraticesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
