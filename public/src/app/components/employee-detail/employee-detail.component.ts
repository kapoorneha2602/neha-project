import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html'
})
export class EmpDetailComponent {
    constructor(private toastr: ToastrService) {}
    
}