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
import { ionCheckmarkDoneCircle, ionCheckmark, ionAccessibilityOutline, ionSendOutline } from '@ng-icons/ionicons';
import { DeviceService } from '../shared/services/device.service';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
import { DownloadButtonComponent } from '../shared/components/downloadButton/download-button.component';
import { opacityAnimation } from '../shared/animations/opacity.animation';
import { OFFERS, OFFER_TOKEN } from '../shared/token/offer.token';
import { ActivatedRoute, RouterModule } from '@angular/router';
import LiveChatMessagesComponent, { MessageSchema } from '../shared/components/live-chat-messages.component';
import { z } from 'zod';

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
    LiveChatMessagesComponent
  ],
  providers: [
    provideIcons({ ionCheckmarkDoneCircle, ionCheckmark, ionAccessibilityOutline, ionSendOutline }),
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

  private channelId = 1;
  private authorAdminId = 2;
  protected authorClientId = 1;

  messagesBobo: z.infer<typeof MessageSchema>[] = [
    {
      authorId: this.authorClientId,
      channelId: this.channelId,
      content: `Bonsoir,
  J'ai enmené Franklin chez le vétérinaire ce matin car son état ne s'arrangeait pas.
  Il doit avoir une forme de gastro puisqu'il a une traitement antibiotique sur une semaine.
  Il avait un peu de fièvre également. Par contre, ce soir, j'ai constaté qu'il y avait du sang dans les utines, bien que ces selles sont de plus en plus normales.
  Mais ce nouveau problème m'inquiète. Est-ce que c'est normal ?
      `,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    },
    {
      authorId: this.authorAdminId,
      channelId: this.channelId,
      content: `Bonjour Marie,
Ben mince...,
C'est peut-être le vaccin combiné, avec le stress du changement de maison.
Quoiqu'il en soit allez au véto bordel !`,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    },
    {
      authorId: this.authorClientId,
      channelId: this.channelId,
      content: `Bonjour Marie,
Ben mince...,
C'est peut-être le vaccin combiné, avec le stress du changement de maison.
Quoiqu'il en soit allez au véto bordel !`,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    },
    {
      authorId: this.authorAdminId,
      channelId: this.channelId,
      content: `Bonjour Marie,
Ben mince...,
C'est peut-être le vaccin combiné, avec le stress du changement de maison.
Quoiqu'il en soit allez au véto bordel !`,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    }
  ];

  messagesAlimentation: z.infer<typeof MessageSchema>[] = [
    {
      authorId: this.authorClientId,
      channelId: this.channelId,
      content: `Bonjour,
  J'ai fait une bêtise.
  Je trouvais Shelby trop maigre et hier soir j'ai doublé sa ration.
  Elle a mal au ventre, elle est énorme.`,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    },
    {
      authorId: this.authorAdminId,
      channelId: this.channelId,
      content: `Bonjour,
Il y a un risque de dilation de l'estomac, il faut aller chez le véto.`,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    },
    {
      authorId: this.authorClientId,
      channelId: this.channelId,
      content: `Merci, je vais y aller.`,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    },
    {
      authorId: this.authorAdminId,
      channelId: this.channelId,
      content: `Très bien, tenez-nous au courant.`,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    }
  ];

  boboDog: z.infer<typeof MessageSchema>[] = [
    {
      authorId: this.authorClientId,
      channelId: this.channelId,
      content: `Bonjour,
  Mon chien s'est fait mal à la gencives. Que faire ?`,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    },
    {
      authorId: this.authorClientId,
      channelId: this.channelId,
      content: `assets/chat/bobo-dog.jpg`,
      id: 2,
      storedAt: new Date(),
      type: 'IMAGE_URL',
      mediaExtension: "jpg"
    },
    {
      authorId: this.authorAdminId,
      channelId: this.channelId,
      content: `Bonjour,
Attention infection possible, surveillez...`,
      id: 1,
      storedAt: new Date(),
      type: 'TEXT',
      mediaExtension: null
    },
  ];

}
