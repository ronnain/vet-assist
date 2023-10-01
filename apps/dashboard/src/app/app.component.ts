import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import HeaderComponent from './shared/header/header.component';
import { AuthService } from './core/auth.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, CommonModule],
  selector: 'pd-root',
  template: `
  <pdHeader *ngIf="authService.isAuth$ | async"/>
  <section class="bg-sky-50 min-h-screen">
    <router-outlet></router-outlet>
  </section>
  `,
  styles: [`

  `]
})
export class AppComponent {

  protected authService = inject(AuthService);

  title = inject(Title);

  constructor() {
    this.title.setTitle('Dashboard');
  }
}
