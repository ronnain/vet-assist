import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HlmInputDirective } from '@spartan-ng/input-helm';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
import { HlmLabelDirective } from '@spartan-ng/label-helm';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionDownloadOutline } from '@ng-icons/ionicons';
import { SubmitEmailDirective } from '../../directives/submit-email.directive';
import { DownloadButtonComponent } from '../downloadButton/download-button.component';
import { IsFormSubmittedDirective } from '../../directives/is-form-submitted.directive';
import { ProgressIndeterminateComponent } from '../progress-indeterminate/progress-indeterminate.component';


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
    NgIconComponent,
    SubmitEmailDirective,
    DownloadButtonComponent,
    IsFormSubmittedDirective,
    ProgressIndeterminateComponent
  ],
  providers: [provideIcons({ ionDownloadOutline })],
  styleUrls: ['./email.component.scss'],
  template: `
    <form
      [formGroup]="form"
      #lpSubmitEmail="lpSubmitEmail"
      lpSubmitEmail
      (emailSubmitted)="emailSubmitted.emit(!!$event)"
      lpIsFormSubmitted
      #lpIsFormSubmitted="lpIsFormSubmitted"
      >
      <div
        class="flex flex-col md:flex-row justify-start items-end w-full md:space-x-2 gap-2"
      >
        <div class="">
          <label hlmLabel class="block font-bold" [variant]="(lpIsFormSubmitted.isFormSubmitted && form.controls.email.invalid)? 'error' : 'default'">

            <span >
              Adresse email :
            </span>

            <input
              aria-label="Email"
              class="w-full min-w-[300px]"
              hlmInput
              type="email"
              placeholder="manon@gmail.com"
              name="email"
              formControlName="email"
            />

          </label>
        </div>

        <div class="mr-auto">
          <lp-download-button [displayIcons]="false"/>
        </div>
      </div>
      <lp-progress-indeterminate class="block mt-3" *ngIf="lpSubmitEmail.isLoading"/>
    </form>
  `,
})
export class EmailComponent {
  @Output() emailSubmitted = new EventEmitter<boolean>();

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}

export type EmailForm = EmailComponent['form'];