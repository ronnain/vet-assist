import { Directive, Output, inject } from '@angular/core';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { ProblemForm } from '../components/problem/problem.component';
import { ProblemStorageService } from '../services/problem-storage.service';
import { ProspectCreated, ProspectService } from '../services/prospect.service';

@Directive({
  selector: 'form[lpSubmitProblem]',
  standalone: true,
  exportAs: 'lpSubmitProblem',
})
export class SubmitProblemDirective {

  private readonly problemStorageService = inject(ProblemStorageService);

  private readonly formGroupDirective = (inject(ControlContainer) as FormGroupDirective);

  private readonly prospectService = inject(ProspectService);

  @Output() problemSubmitted = this.formGroupDirective.ngSubmit.pipe(
    map(() => this.formGroupDirective.form),
    map(form => form as ProblemForm),
    filter(form => form.valid),
    map(form => form.value.problem),
    distinctUntilChanged((prev, curr) => prev === curr),
    filter(problem => !!problem),
    map(problem => problem as string),
    tap(() => this.isLoading = true),
    switchMap((problem) => this.prospectService.prospect$.pipe(map((prospect) => ({prospect, problem}))) ),
    switchMap((data: {prospect: ProspectCreated, problem: string}) => this.problemStorageService.store(data)),
    tap(() => this.isLoading = false),
    map((result) => !!result),
  );

  public isLoading = false;

}
