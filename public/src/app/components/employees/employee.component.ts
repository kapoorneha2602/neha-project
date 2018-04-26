import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpDetailComponent } from '../employee-detail/employee-detail.component';
import { EMP } from './mock-employees';
import { EmpService } from './employee.service';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html'
})
export class EmpListComponent {
    selectedEmp: any;
    empList = [];
    constructor(private toastr: ToastrService, private empService: EmpService, private http: HttpClient) { }
    model = {
        name: "",
        email: ""
    }
    ngOnInit() {
        this.getEmployees();
    }
    getEmployees(): void {
        console.log("in  getEmployees function");
        this.empService.getHeroes()
            .subscribe(empList => this.empList = empList);
    }

    

    // getEmployees(): Observable<IPosts[]> {

    //     this.http.get('/getAllEmployees').subscribe(data => {
    //         this.empList = data;
    //       });

    //     //   getPosts(): Observable<IPosts[]> {
    //     //     return this.http
    //     //         .get(this._postsURL)
    //     //         .map((response: Response) => {
    //     //             return <IPosts[]>response.json();
    //     //         })
    //     //         .catch(this.handleError);
    //     // }
    
   
    // }

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
        let obj = { "name": this.model.name, "email": this.model.email };
        this.http.post('/api/addEmployee', obj)
            .subscribe(res => {
                console.log(res, "is the result");
                if (res) {
                    this.toastr.success('Employee Record Added Successfully');
                }
            }, (err) => {
                console.log(err);
            }
            );
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