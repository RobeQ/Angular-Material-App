import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = JSON.parse(JSON.stringify(response));
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = JSON.parse(JSON.stringify(response)).id;
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    this.http.patch(this.url + "/" + post.id, JSON.stringify({ isRed: true }))
      .subscribe(response => {
        console.log(response);
      })
  }
}
