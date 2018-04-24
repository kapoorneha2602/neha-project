import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMP } from './mock-employees';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmpService {

    constructor() { }


    getHeroes(): Observable<Employee[]> {
        console.log("send data from obn",EMP);
        return of(EMP);
    }

    // getHeroes(): Employee[] {
    //     return EMP;
    // }
}