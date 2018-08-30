import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
// tslint:disable-next-line:component-class-suffix
export class LoginComponentLanding implements OnInit {
  data: Date = new Date();

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('full-screen');
    body.classList.add('register');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
 }
}
