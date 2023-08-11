import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { initClient } from '@ts-rest/core';
import { contract } from '@vet-assist/api-contract';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule],
  selector: 'vet-assist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vet-assist';

  readonly client = initClient(contract, {
    baseUrl: 'http://localhost:3000/api',
    baseHeaders: {},
  });

  post$ = this.client.getPosts({body: {}});

  // async ngOnInit() {

  //   const { body, status } = await client.createPost({
  //     body: {
  //       title: 'Post Title',
  //       content: 'lol content',
  //       published: false,
  //     },
  //   });

  //   if (status === 201) {
  //     // body is Post
  //     console.log(body);
  //   } else {
  //     // body is unknown
  //     console.log(body);
  //   }
  // }
}
