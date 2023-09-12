import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from '../email/email.component';
import { ProblemComponent } from '../problem/problem.component';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/alert-helm';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCheckmarkDoneCircle } from '@ng-icons/ionicons';
import { DeviceService } from '../services/device.service';
import { HlmButtonDirective } from '@spartan-ng/button-helm';

@Component({
  selector: 'lp-landing-page-1',
  standalone: true,
  imports: [
    CommonModule,
    EmailComponent,
    ProblemComponent,
    NgIconComponent,
    HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
    HlmButtonDirective,
  ],
  providers: [provideIcons({ ionCheckmarkDoneCircle })],
  templateUrl: './landing-page-1.component.html',
  styleUrls: ['./landing-page-1.component.scss']
})
export default class LandingPage1Component {

  step: 1 | 2 | 3 = 1;

  isBurgerMenuOpen = false;

  deviceService = inject(DeviceService);

}
