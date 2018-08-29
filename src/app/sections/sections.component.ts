import { Component, OnInit, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// t = current time
// b = start value
// c = change in value
// d = duration
const easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
    // tslint:disable-next-line:curly
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return - c / 2 * (t * (t - 2) - 1) + b;
};
@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit, OnDestroy, AfterViewInit {
    private fragment: string;

    constructor(router: Router) {
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    const element = document.querySelector('#' + tree.fragment);
                    if (element) { element.scrollIntoView(); }
                }
            }
        });
    }
    @HostListener('window:scroll', ['$event'])
    updateNavigation() {
        const contentSections = document.getElementsByClassName('cd-section') as HTMLCollectionOf<any>;
        const navigationItems = document.getElementById('cd-vertical-nav').getElementsByTagName('a');

        for (let i = 0; i < contentSections.length; i++) {
            // tslint:disable-next-line:radix
            const activeSection: any = parseInt(navigationItems[i].getAttribute('data-number')) - 1;

            if ( ( contentSections[i].offsetTop - window.innerHeight / 2 < window.pageYOffset )
            && ( contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight / 2 > window.pageYOffset ) ) {
                navigationItems[activeSection].classList.add('is-selected');
            } else {
                navigationItems[activeSection].classList.remove('is-selected');
            }
        }
    }

    ngOnInit() {
        const navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.remove('navbar-transparent');
    }
    ngOnDestroy() {
        const navbar = document.getElementsByTagName('app-navbar')[0];
        navbar.children[0].classList.add('navbar-transparent');
    }
    smoothScroll(target) {
        const targetScroll = document.getElementById(target);
        this.scrollTo(document.documentElement, targetScroll.offsetTop, 1250);
    }
    scrollTo(element, to, duration) {
        const start = element.scrollTop;
        const    change = to - start;
        let    currentTime = 0;
        const    increment = 20;

        const animateScroll = function() {
            currentTime += increment;
            const val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
    ngAfterViewInit() {
        this.updateNavigation();
    }
}
