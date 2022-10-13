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
    //ahora se obtiene la data directamente de las entidades
    //cada vez que naveguemos a otro vista y volvamos no se hara
    //otra llamada a la api
    this.posts$ = this.postService.entities$;
    //SIN RESOLVER
    // this.posts$ = this.postService.getAll();
  }
}
