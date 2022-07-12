import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LibraryComponent } from './library/library/library.component';
import { TransactionComponent } from './transaction/transaction/transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PinjamComponent } from './pinjam/pinjam/pinjam.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'library',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }, {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'public/home',
    loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    path: 'transaction',
    component: TransactionComponent,
  },
  {
    path: 'pinjam',
    component: PinjamComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
