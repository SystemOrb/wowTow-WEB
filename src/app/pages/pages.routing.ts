import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './public/home/index.component';
import { AboutHomeComponent } from './public/about/about-home.component';
import { ContactHomeComponent } from './public/contact/contact-home.component';

const routes: Routes = [
    { path: 'home', component: IndexComponent },
    { path: 'about', component: AboutHomeComponent },
    { path: 'contact', component: ContactHomeComponent },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
     }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule {}
