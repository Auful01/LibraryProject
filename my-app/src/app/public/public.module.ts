import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './home/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [PublicComponent, HomeComponent, PostDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class PublicModule { }
