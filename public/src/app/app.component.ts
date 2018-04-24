import { Component } from '@angular/core';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

// import { EmpListComponent } from './components/employees/employee.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Employee Portal';
}