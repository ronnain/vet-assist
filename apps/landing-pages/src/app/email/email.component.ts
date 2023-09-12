import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HlmInputDirective } from '@spartan-ng/input-helm';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
import { HlmLabelDirective } from '@spartan-ng/label-helm';



@Component({
  selector: 'lp-email',
  standalone: true,
  imports: [
    CommonModule,
    HlmInputDirective,
    HlmButtonDirective,
    FormsModule,
    ReactiveFormsModule,
    HlmLabelDirective
  ],
  styleUrls: ['./email.component.scss'],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
      <div
        class="flex md:flex-col md:flex-nowrap w-full  items-center space-x-2 m-auto"
      >
        <label hlmLabel class="font-bold [&:has([hlmInput])]:mb-5">Entrez votre adresse email :
        <!-- ADD A TITLE LABEL -->
        <!-- PLACEHOLDER romain@gmail.com -->
          <input
            aria-label="Email"
            class="w-screen"
            hlmInput
            type="email"
            placeholder="manon@gmail.com"
            name="email"
            formControlName="email"
          />
        </label>
        <button hlmBtn [disabled]="form.invalid">Télécharger</button>
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