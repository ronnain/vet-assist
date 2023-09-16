import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
import { bootstrapApple, bootstrapGooglePlay } from '@ng-icons/bootstrap-icons';


@Component({
  selector: 'lp-download-button',
  standalone: true,
  imports: [
    CommonModule,
    NgIconComponent,
    HlmButtonDirective
  ],
  providers: [provideIcons({ bootstrapApple, bootstrapGooglePlay })],
  template: `
  <button hlmBtn variant='accent' class="space-x-3">
    <span class="font-bold">Télécharger</span>
    <ng-container *ngIf="displayIcons">
      <ng-icon hlmAlertIcon name="bootstrapApple" [size]="'1.5rem'"/>
      <ng-icon hlmAlertIcon name="bootstrapGooglePlay" [size]="'1.5rem'"/>
    </ng-container>
  </button>
  `,
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent {
  @Input() displayIcons = true;
}
