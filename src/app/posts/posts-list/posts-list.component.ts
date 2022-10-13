import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
  }
}
