import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/posts';
import { PostsService } from 'src/app/posts.service';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { faPlus, faPencilAlt, faEye, faEraser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Observable<Posts[]>;

  constructor(private postsService: PostsService, private router: Router, private modalService: NgbModal) { }
  closeResult: string;

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData() {
    this.posts = this.postsService.allEmployee();
    console.log(this.posts);

  }

  employeeDetails(id: number) {
    this.router.navigate(['public/home/post-detail', id]);
  }

  edit(id: number) {
    this.router.navigate(['public/home/post-edit', id]);
  }

  add() {
    this.router.navigate(['public/home/post-add']);
  }

  delete(id: number) {
    this.postsService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  faPlus = faPlus;
  faPencilAlt = faPencilAlt;
  faEye = faEye;
  faEraser = faEraser;
  displayedColumns: string[] = ['userId', 'title', 'body'];

}
