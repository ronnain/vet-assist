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
import { ionCheckmarkDoneCircle, ionCheckmark, ionAccessibilityOutline } from '@ng-icons/ionicons';
import { DeviceService } from '../shared/services/device.service';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
import { DownloadButtonComponent } from '../shared/components/downloadButton/download-button.component';
import { opacityAnimation } from '../shared/animations/opacity.animation';
import { OFFERS, OFFER_TOKEN } from '../shared/token/offer.token';
import { ActivatedRoute, RouterModule } from '@angular/router';

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
    DownloadButtonComponent,
    RouterModule,
  ],
  providers: [
    // NgIconsModule.withIcons({ ionCheckmarkDoneCircle, ionCheckmark }),
    // provideIcons({ ionCheckmarkDoneCircle, ionCheckmark }),
    provideIcons({ ionCheckmarkDoneCircle, ionCheckmark, ionAccessibilityOutline }),
    {
      provide: OFFER_TOKEN,
      useFactory: () => {
        const {offer, price} = inject(ActivatedRoute).snapshot.params as {offer: keyof typeof OFFERS, price: Readonly<1 | 2 | 3>};
        return OFFERS[offer][price];
      },
    }
  ],
  templateUrl: './landing-page-1.component.html',
  styleUrls: ['./landing-page-1.component.scss'],
  animations: [opacityAnimation]
})
export default class LandingPage1Component {

  step: 1 | 2 | 3 = 1;

  isBurgerMenuOpen = false;

  deviceService = inject(DeviceService);
  protected readonly offer = inject(OFFER_TOKEN);
  protected readonly extra = 'extra' in this.offer ? this.offer.extra : '';

  scrollToElement($element: Element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
