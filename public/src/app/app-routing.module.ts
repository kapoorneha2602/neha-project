// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './components/employees/employee.component';
import { EmpDetailComponent } from './components/employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/emp', pathMatch: 'full' },
  { path: 'emp', component: EmpListComponent },
  { path: 'empDetail', component: EmpDetailComponent }
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


