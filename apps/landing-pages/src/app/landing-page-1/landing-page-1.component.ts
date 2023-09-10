import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'lp-landing-page-1',
  standalone: true,
  imports: [CommonModule, EmailComponent],
  templateUrl: './landing-page-1.component.html',
  styleUrls: ['./landing-page-1.component.scss']
})
export default class LandingPage1Component {}
