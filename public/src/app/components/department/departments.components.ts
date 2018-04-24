import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';
import { DepartmentService } from './department.service';

import { Department } from './department';

@Component({
    selector: 'department-list',
    templateUrl: './departments.component.html'
})
export class DepartmentComponent {
    departments: Department[];
    constructor(private toastr: ToastrService, private deptService: DepartmentService) {
        console.log('in post component');
    }
    ngOnInit() {
        this.getAllDepartment();
    }
    getAllDepartment(): void {
        this.deptService.getAllDepartments()
            .subscribe(departments => this.departments = departments);
    }
}