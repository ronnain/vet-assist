import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from './core/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe, JsonPipe],
  selector: 'lp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing-pages';

  private readonly apiService = inject(ApiService);

  prospects = this.apiService.client.prospect.prospects();
}
