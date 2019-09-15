import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = JSON.parse(JSON.stringify(response));
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = JSON.parse(JSON.stringify(response)).id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInputError)
            alert('Bad input error')
          else throw error;
        });
  }

  updatePost(post) {
    this.service.update({ isRed: true })
      .subscribe(
        response => {
          console.log(response);
        });
  };

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has been aready deleted');
          else throw error;
        })
  }
}
