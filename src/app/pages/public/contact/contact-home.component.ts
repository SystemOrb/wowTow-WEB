import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styles: []
})
export class ContactHomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    body.classList.add('loading');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    body.classList.remove('loading');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
 }
}
