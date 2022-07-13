import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';
// import { Posts } from 'src/app/posts';
import { PostsService } from 'src/app/posts.service';

var post: Observable<any>;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  posts: Observable<any>;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData() {
    this.posts = this.postsService.allEmployee();
    post = this.postsService.allEmployee();
    console.log(this.posts);

  }



  displayedColumns: string[] = ['userId', 'title', 'body'];
  dataSource = post;
}
