import { Directive, inject } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Directive({
    selector: '[lpIsFormSubmitted]',
    standalone: true,
    exportAs: 'lpIsFormSubmitted'
 })
export class IsFormSubmittedDirective {

    private readonly formGroupDirective = (inject(ControlContainer) as FormGroupDirective);

    public get isFormSubmitted() {
        return this.formGroupDirective.submitted;
    }


}