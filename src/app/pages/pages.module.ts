import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHomeComponent } from './public/about/about-home.component';
import { ContactHomeComponent } from './public/contact/contact-home.component';
import { IndexComponent } from './public/home/index.component';
import { LoginComponentLanding } from './public/login/login.component';
import { NotFoundComponent } from './public/404/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { LandingRoutingModule } from './pages.routing';
import { SubComponentsModule } from './public/shared/sub-components.module';
import { HowWorkComponent } from './public/work/how-work.component';
import { VideoComponent } from './public/work/video.component';
import { TestimonialsLandingComponent } from './public/testimonials/testimonials-landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule,
    SubComponentsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AboutHomeComponent,
    ContactHomeComponent,
    IndexComponent,
    LoginComponentLanding,
    NotFoundComponent,
    HowWorkComponent,
    VideoComponent,
    TestimonialsLandingComponent
  ]
})
export class PagesModule { }
