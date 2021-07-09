import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthFormModule } from './auth-form/auth-form.module';
import { MainModule } from './main/main.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { TableModule } from 'primeng/table';
import { CabinetComponent } from './cabinet/cabinet.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersComponent,
    CategoriesComponent,
    CabinetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AuthFormModule,
    FormsModule,
    // MainModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
