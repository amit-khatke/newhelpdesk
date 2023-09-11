import { Component, OnInit } from '@angular/core';
import { CallLogComponent } from './call-log/call-log.component';
import { LeftComponent } from './left/left.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { Information } from './information';

@Component({
  standalone:true,
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css'],
  imports: [ LeftComponent,SentimentComponent,CallLogComponent],
})
export class DashboradComponent { 
    inforamtion: Information = {
      name: 'amit',
      gender:'male',
      dob:2/11/2003,
      phone:'8080613413'
    };
  }

