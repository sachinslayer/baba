import { Component, OnInit } from '@angular/core';
import  Typed  from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(){}
  ngOnInit() {
    const typedOptions = {
      strings: ['Created', 'By', 'Sachin Yadav'],
      typeSpeed: 100,
      loop: true,
    };
  
    const typedElement = document.querySelector('.typed');
    new Typed(typedElement, typedOptions);
  }
  


}
