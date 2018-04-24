import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpListComponent } from './components/employees/employee.component';
import { EmpDetailComponent } from './components/employee-detail/employee-detail.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { EmpService } from './components/employees/employee.service';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule }    from '@angular/common/http';
import { PostListComponent } from './components/posts/posts.component';
import { PostService } from './components/posts/posts.service';


import { DepartmentService } from './components/department/department.service';
import { DepartmentComponent } from './components/department/departments.components';


@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailComponent,
    HeaderBarComponent,
    PostListComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    AppRoutingModule, // ToastrModule added
    HttpClientModule
  ],
  providers: [EmpService,PostService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
