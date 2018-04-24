import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpDetailComponent } from '../employee-detail/employee-detail.component';
import { EMP } from './mock-employees';
import { EmpService } from './employee.service';
import { Employee } from './employee';

@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html'
})
export class EmpListComponent {
    // posts: any = [];
    selectedEmp: any;
    empList = [];

    constructor(private toastr: ToastrService, private empService: EmpService) { }
    model = {
        name: "",
        email: ""
    }
    // empList = EMP;
    ngOnInit() {
        this.getEmployees();
    }



    // getData(): void {


    //     this.empService.getAllPosts()
    //     .subscribe(posts => this.posts = posts);


    // }


    getEmployees(): void {
        console.log("in  getEmployees function");
        this.empService.getHeroes()
            .subscribe(empList => this.empList = empList);
    }

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
    selectEmp(data) {
        console.log("select emp is", data);
        this.selectedEmp = data;

    }
}