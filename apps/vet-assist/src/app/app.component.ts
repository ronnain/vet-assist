import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { initClient } from '@ts-rest/core';
import { contract } from '@vet-assist/api-contract';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'vet-assist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vet-assist';

  async ngOnInit() {
    const client = initClient(contract, {
      baseUrl: 'http://localhost:3000',
      baseHeaders: {},
    });
    
    const { body, status } = await client.createPost({
      body: {
        title: 'Post Title',
        body: 'Post Body',
      },
    });
    
    if (status === 201) {
      // body is Post
      console.log(body);
    } else {
      // body is unknown
      console.log(body);
    }
  }
}
