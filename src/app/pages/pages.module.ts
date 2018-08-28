import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHomeComponent } from './public/about/about-home.component';
import { ContactHomeComponent } from './public/contact/contact-home.component';
import { IndexComponent } from './public/home/index.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { FooterComponent } from './public/shared/footer/footer.component';
import { NavbarComponent } from './public/shared/navbar/navbar.component';
import { NotFoundComponent } from './public/404/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AboutHomeComponent,
    ContactHomeComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }
