import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  editPostForm!: FormGroup;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.editPostForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.id = this.route.snapshot.params['id'];
    this.postService.entities$.subscribe((posts) => {
      if (posts.length) {
        const post = posts.find((post) => post.id === this.id);

        this.editPostForm.patchValue({
          title: post?.title,
          description: post?.description,
        });
      }
    });
  }

  onEditPost() {
    const postData = {
      ...this.editPostForm.value,
      id: this.id,
    };
    this.postService.update(postData);
    this.router.navigate(['/posts']);
  }
}
