import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  addPostForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addPostForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onAddPost() {
    const post: Post = this.addPostForm.value;
    this.postService.add(post).subscribe((data) => {
      //al navegar a la vista de posts, no se vuelve a hacer un request
      // porque gracias a ng-data, los posts se guardan en cache
      this.router.navigate(['/posts']);
    });
  }
}
