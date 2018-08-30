import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';
// Routes
import { AppRoutingModule } from './app.routing';
// Home
import { PagesModule } from './pages/pages.module';
import { RegisterComponentLanding } from './pages/public/register/register.component';
import { RegisterProviderComponent } from './pages/public/register-provider/register.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        RegisterComponentLanding,
        RegisterProviderComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule,
        PagesModule // Static home
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
