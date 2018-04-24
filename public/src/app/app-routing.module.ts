import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './components/employees/employee.component';
import { EmpDetailComponent } from './components/employee-detail/employee-detail.component';
import { PostListComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/emp', pathMatch: 'full' },
  { path: 'emp', component: EmpListComponent },
  { path: 'empDetail', component: EmpDetailComponent },
  { path: 'posts', component: PostListComponent }
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }