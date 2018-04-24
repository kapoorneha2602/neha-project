import { Injectable } from '@angular/core';
import { Employee } from './employee';

import { Post } from './posts';




import { EMP } from './mock-employees';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {

    constructor(  private http: HttpClient) { }


    getHeroes(): Observable<Employee[]> {
        console.log("send data from obn", EMP);
        return of(EMP);
    }

    // getHeroes(): Employee[] {
    //     return EMP;
    // }

    getAllPosts(): Observable<Post[]> {
    
        return this.http.get('/api/posts')

        .map(res => res as Post[] || []); 
          
          
    }



}

// .map(res => res.json());