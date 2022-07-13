import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Posts } from 'src/app/posts';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  posts: any;
  // constructor() { }

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
  }


  savePost() {

    this.postsService.createEmployee(this.posts).subscribe(data => {
      console.log(data)
      // this.posts =  ;
      this.gotoList();
    },
      error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['public/home/post']);
  }



}
