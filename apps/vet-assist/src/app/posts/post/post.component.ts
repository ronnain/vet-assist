import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contract } from '@vet-assist/api-contract';
import { initClient } from '@ts-rest/core';

@Component({
  selector: 'va-post',
  standalone: true,
  imports: [CommonModule],
  template: `
    Posts API
    <pre>{{post$ | async | json}}</pre>
    <pre>{{posts$ | async | json}}</pre>
  `,
  styleUrls: ['./post.component.scss']
})
export default class PostComponent {
  readonly client = initClient(contract, {
    baseUrl: 'http://localhost:3000',
    baseHeaders: {},
  });

  posts$ = this.client.getPosts({body: {where: {id: {equals: 2}}}});
  post$ = this.client.getPost({params: {id: '1'}});

  //   async ngOnInit() {

  //   const { body, status } = await this.client.createPost({
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
