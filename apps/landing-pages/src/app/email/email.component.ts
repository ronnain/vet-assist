import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lp-email',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./email.component.scss'],
  template: `
  <div class="form__group field">
    <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
    <label for="name" class="form__label">Name</label>
  </div>
  `,
})
export class EmailComponent {}
