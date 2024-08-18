import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[DatePipe]
})
export class HeaderComponent implements OnInit{
  isSignIn: boolean = false;
  isLoggedIn: boolean = false;
  today: Date = new Date();
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    setInterval(() => {
      this.today = new Date();
    }, 1000); // Update every second
  }
}
