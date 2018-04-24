import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpDetailComponent } from '../employee-detail/employee-detail.component';
import { EMP } from './mock-employees';
@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html'
})
export class EmpListComponent {
    constructor(private toastr: ToastrService) {}
    model = {
        name: "",
        email: ""
    }
    empList=EMP;
    // empList = [
    //     {
    //         "name": "Neha",
    //         "email": "neha@yopmail.com"
    //     },
    //     {
    //         "name": "Sneha",
    //         "email": "sneha@yopmail.com"
    //     },
    //     {
    //         "name": "Tina",
    //         "email": "tina@yopmail.com"
    //     },
    //     {
    //         "name": "Heena",
    //         "email": "heena@yopmail.com"
    //     }
    // ];

    //---------------------------------------------------
    //------------- Function to Add Employee-------------
    //---------------------------------------------------
    addEmployee() {
        this.empList.push({ "name": this.model.name, "email": this.model.email });
    }
    //---------------------------------------------------
    //------------- Function to Delete Employee----------
    //---------------------------------------------------
    deleteEmp(index) {
        this.empList.splice(index, 1); //array.splice(index, howmany, item1, ....., itemX)
        this.toastr.success('Employee Record Deleted Successfully');
    }
}