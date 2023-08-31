import { Component, OnInit } from '@angular/core';
import { LoginpageComponent } from './loginpage/loginpage.component';

@Component({
  standalone:true,
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css'],
  imports:[LoginpageComponent],
})
export class HelpdeskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}