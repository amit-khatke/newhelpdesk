import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,HelpdeskComponent],
  template: `
    <app-helpdesk></app-helpdesk>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
