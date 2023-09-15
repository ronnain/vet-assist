import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HlmInputDirective } from '@spartan-ng/input-helm';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
import { HlmLabelDirective } from '@spartan-ng/label-helm';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionDownloadOutline } from '@ng-icons/ionicons';


@Component({
  selector: 'lp-email',
  standalone: true,
  imports: [
    CommonModule,
    HlmInputDirective,
    HlmButtonDirective,
    FormsModule,
    ReactiveFormsModule,
    HlmLabelDirective,
    NgIconComponent
  ],
  providers: [provideIcons({ ionDownloadOutline })],
  styleUrls: ['./email.component.scss'],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
      <div
        class="flex flex-row md:flex-row justify-start items-end w-full space-x-2"
      >
        <label hlmLabel class="font-bold">Adresse email :
        <!-- ADD A TITLE LABEL -->
        <!-- PLACEHOLDER romain@gmail.com -->
          <input
            aria-label="Email"
            class="w-full"
            hlmInput
            type="email"
            placeholder="manon@gmail.com"
            name="email"
            formControlName="email"
          />
        </label>
        <button hlmBtn variant='accent' class="space-x-3"><span>Télécharger</span><ng-icon hlmAlertIcon name="ionDownloadOutline" [size]="'1.5rem'"/></button>
      </div>
    </form>
  `,
})
export class EmailComponent {
  @Output() emailSubmitted = new EventEmitter<boolean>();

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit(form: EmailForm) {
    console.log(form);
    this.emailSubmitted.emit(true);
  }
}

type EmailForm = EmailComponent['form'];