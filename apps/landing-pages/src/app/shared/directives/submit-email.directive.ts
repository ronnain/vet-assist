import { Directive, Output, inject } from '@angular/core';
import { EmailStorageService } from '../services/email-storage.service';
import { EmailForm } from '../components/email/email.component';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { OFFER_TOKEN } from '../token/offer.token';
import { ProspectCreated, ProspectService } from '../services/prospect.service';

@Directive({
  selector: 'form[lpSubmitEmail]',
  standalone: true,
  exportAs: 'lpSubmitEmail',
})
export class SubmitEmailDirective {

  private readonly emailStorageService = inject(EmailStorageService);

  private readonly formGroupDirective = (inject(ControlContainer) as FormGroupDirective);
  private readonly prospectService = inject(ProspectService);

  private readonly offer = inject(OFFER_TOKEN);

  @Output() emailSubmitted = this.formGroupDirective.ngSubmit.pipe(
    map(() => this.formGroupDirective.form),
    map(form => form as EmailForm),
    filter(form => form.valid),
    map(form => form.value.email),
    distinctUntilChanged((prev, curr) => prev === curr),
    filter(email => !!email),
    map(email => email as string),
    tap(() => this.isLoading = true),
    switchMap((email) => this.emailStorageService.store({email, ...this.offer}).pipe(filter((prospect) => !!prospect))),
    tap((prospect: ProspectCreated) => this.prospectService.prospect$.next(prospect)),
    tap(() => this.isLoading = false),
    map((result) => !!result),
  );

  public isLoading = false;
}
