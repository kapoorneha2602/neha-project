import { Injectable } from '@angular/core';



import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Department } from './department';

@Injectable()
export class DepartmentService {
    constructor(private http: HttpClient) { }
    getAllDepartments(): Observable<Department[]> {
        return this.http.get('/api/department')
            .map(res => res as Department[] || []);
    }
}