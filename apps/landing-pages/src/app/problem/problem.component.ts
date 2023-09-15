import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
import { HlmInputDirective } from '@spartan-ng/input-helm';
import { HlmLabelDirective } from '@spartan-ng/label-helm';

@Component({
  selector: 'lp-problem',
  standalone: true,
  imports: [
    CommonModule,
    HlmInputDirective,
    HlmButtonDirective,
    FormsModule,
    ReactiveFormsModule,
    HlmLabelDirective
  ],
  template: `
  <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
    <div
      class="flex flex-col justify-start items-start w-full space-y-2"
    >
      <!-- ADD A TITLE LABEL -->
      <label hlmLabel class="font-bold">Quel est plus gros problème que vous rencontrez avec votre animal / vos animaux ?
        <textarea
          aria-label="Problem"
          class="w-full max-w-2xl min-h-[80px]"
          hlmInput
          type="text"
          placeholder="Ecrivez votre problème."
          name="problem"
          formControlName="problem"
        >
        </textarea>
      </label>
      <button class="w-fit md:w-auto" hlmBtn [disabled]="form.invalid" variant='accent'>
        Envoyer
      </button>
    </div>
  </form>`,
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent {
  @Output() problemSubmitted = new EventEmitter<boolean>();

  form = new FormGroup({
    problem: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  onSubmit(form: ProblemForm) {
    console.log(form);
    this.problemSubmitted.emit(true);
  }
}

type ProblemForm = ProblemComponent['form'];
