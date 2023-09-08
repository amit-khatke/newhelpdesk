import { Component, OnInit } from '@angular/core';
import { DashboradComponent } from './dashborad/dashborad.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@Component({
  standalone:true,
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css'],
  imports:[LoginpageComponent,DashboradComponent],
})
export class HelpdeskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}