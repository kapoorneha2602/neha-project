
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html'
})
export class EmpDetailComponent {
    @Input() empData: any;
    
  
    constructor(private toastr: ToastrService) {
        console.log('in detail compoent the  data is');
    }
    
}