import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
import { HlmInputDirective } from '@spartan-ng/input-helm';
import { HlmLabelDirective } from '@spartan-ng/label-helm';
import { IsFormSubmittedDirective } from '../../directives/is-form-submitted.directive';
import { SubmitProblemDirective } from '../../directives/submit-problem.directive';
import { ProgressIndeterminateComponent } from '../progress-indeterminate/progress-indeterminate.component';

@Component({
  selector: 'lp-problem',
  standalone: true,
  imports: [
    CommonModule,
    HlmInputDirective,
    HlmButtonDirective,
    FormsModule,
    ReactiveFormsModule,
    HlmLabelDirective,
    IsFormSubmittedDirective,
    SubmitProblemDirective,
    ProgressIndeterminateComponent
  ],
  template: `
  <form [formGroup]="form" #lpSubmitProblem="lpSubmitProblem" lpSubmitProblem (problemSubmitted)="problemSubmitted.emit(!!$event)">
    <div
      class="flex flex-col justify-start items-start w-full space-y-2"
    >
      <!-- ADD A TITLE LABEL -->
      <label
        hlmLabel
        class="font-bold"
        lpIsFormSubmitted
        #lpIsFormSubmitted="lpIsFormSubmitted"
        [variant]="(lpIsFormSubmitted.isFormSubmitted && form.controls.problem.invalid)? 'error' : 'default'"
        >
        <span>Quel est plus gros problème que vous rencontrez avec votre animal / vos animaux ?</span>
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
      <button class="w-fit md:w-auto" hlmBtn variant='accent'>
        Envoyer
      </button>
    </div>
    <lp-progress-indeterminate class="block mt-3" *ngIf="lpSubmitProblem.isLoading"/>
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
}

export type ProblemForm = ProblemComponent['form'];
