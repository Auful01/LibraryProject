import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
// import { Posts } from 'src/app/posts';
import { PostsService } from 'src/app/posts.service';
import { Employee } from 'src/employee';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  id: number;
  post: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private postService: PostsService) { }

  ngOnInit() {
    this.post = [];

    this.id = this.route.snapshot.params['id'];

    this.postService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.post = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['public/home/post']);
  }

}
