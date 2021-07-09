import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { CabinetComponent } from './cabinet/cabinet.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'auth',
    component: AuthFormComponent,
  },
  { path: 'create-user', component: CreateUserComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'cabinet',
    component: CabinetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
