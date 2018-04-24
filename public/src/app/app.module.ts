import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmpListComponent } from './components/employees/employee.component';
import { EmpDetailComponent } from './components/employee-detail/employee-detail.component';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { EmpService } from './components/employees/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
