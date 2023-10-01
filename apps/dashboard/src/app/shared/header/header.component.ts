import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'pdHeader',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header class="bg-sky-700">
    <div class="flex justify-end items-center gap-3 py-3 px-8">
      <div>
        <button class="bg-accent text-accent-foreground p-1 rounded-sm" (click)="authService.logout()">Logout</button>
      </div>
    </div>
  </header>`,
})
export default class HeaderComponent {

  protected authService = inject(AuthService);

}