import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrnProgressComponent, BrnProgressIndicatorComponent } from '@spartan-ng/ui-progress-brain';
import { HlmProgressDirective, HlmProgressIndicatorDirective } from '@spartan-ng/progress-helm';

@Component({
  selector: 'lp-progress-indeterminate',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BrnProgressComponent, BrnProgressIndicatorComponent, HlmProgressIndicatorDirective, HlmProgressDirective],
  template: `
    <brn-progress hlm aria-labelledby='loading'>
      <brn-progress-indicator hlm />
    </brn-progress>
  `,
  styleUrls: ['./progress-indeterminate.component.scss']
})
export class ProgressIndeterminateComponent {}