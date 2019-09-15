import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = JSON.parse(JSON.stringify(response));
        },
        error => {
          alert('An unexptected error occured');
          console.log(error);
        });
  }
  posts: any[];

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = JSON.parse(JSON.stringify(response)).id;
          this.posts.splice(0, 0, post);
        },
        error => {
          alert('An unexpected error occured');
          console.log(error);
        });
  }

  updatePost(post) {
    this.service.patchPost({ isRed: true })
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert('An unexpected error occured');
          console.log(error);
        });
  };

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has been aready deleted');
          } else {
            alert('An unexpected error occured');
          }
        })
  }
}
