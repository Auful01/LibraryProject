import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostComponent } from './post/post.component';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { PostEditComponent } from './post-edit/post-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCreateComponent } from './post-create/post-create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'post-detail/:id',
        component: PostDetailComponent
      }, {
        path: 'post',
        component: PostComponent
      },
      {
        path: 'post-edit/:id',
        component: PostEditComponent
      },
      {
        path: 'post-add',
        component: PostCreateComponent
      }

    ]
  }
]

@NgModule({
  declarations: [PostComponent, PostEditComponent, PostCreateComponent],
  imports: [
    CommonModule,
    NgbButtonsModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
