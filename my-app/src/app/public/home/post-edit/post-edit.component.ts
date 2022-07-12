import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/posts';
import { PostsService } from 'src/app/posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  id: number;
  posts: Posts;

  constructor(private route: ActivatedRoute, private router: Router,
    private postService: PostsService) { }

  ngOnInit() {
    this.posts = new Posts();

    this.id = this.route.snapshot.params['id'];

    this.postService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.posts = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.postService.updateEmployee(this.id, this.posts)
      .subscribe(data => {
        console.log(data);
        this.posts = new Posts();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['public/home/post']);
  }
}
