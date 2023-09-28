import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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

}
