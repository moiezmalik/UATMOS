import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { RouterScroller } from '../../../../node_modules/@angular/router/src/router_scroller';
import { SliderComponent } from '../slider/slider.component';
import { $ } from '../../../../node_modules/protractor';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { 
}

  ngOnInit() {

    
  }
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  //nav = document.getElementsByName('nav');


      //this.nav.classList.remove('fixed-navbar');


  @HostListener('window:scroll', ['$event'])
    handleScroll(){
     
      if(window.pageYOffset > this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}
