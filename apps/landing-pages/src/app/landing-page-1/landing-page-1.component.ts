import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from '../shared/components/email/email.component';
import { ProblemComponent } from '../shared/components/problem/problem.component';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/alert-helm';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCheckmarkDoneCircle } from '@ng-icons/ionicons';
import { DeviceService } from '../shared/services/device.service';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
import { DownloadButtonComponent } from '../shared/components/downloadButton/download-button.component';
import { opacityAnimation } from '../shared/animations/opacity.animation';
import { provideOfferToken } from '../shared/token/offer.token';

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
    DownloadButtonComponent
  ],
  providers: [
    provideIcons({ ionCheckmarkDoneCircle }),
    provideOfferToken({
      offerName: 'offer 1',
      offerDescription: 'offer description 1'
    })
  ],
  templateUrl: './landing-page-1.component.html',
  styleUrls: ['./landing-page-1.component.scss'],
  animations: [opacityAnimation]
})
export default class LandingPage1Component {

  step: 1 | 2 | 3 = 1;

  isBurgerMenuOpen = false;

  deviceService = inject(DeviceService);

  scrollToElement($element: Element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
