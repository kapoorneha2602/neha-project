import { Injectable } from '@angular/core';
import { Employee } from './employee';

import { EMP } from './mock-employees';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmpService {

    constructor(  private http: HttpClient) { }

    // getHeroes(): Observable<Employee[]> {
    //     console.log("send data from obn", EMP);
    //     return of(EMP);
    // }

    getHeroes(): Observable<Employee[]> {
        // return this.http
        //     .get('/api/getAllEmployees')
        //     .map((response: Response) => {
        //         return <Employee[]>response.json();
        //     })
        //     .catch(this.handleError);
        return this.http.get('/api/getAllEmployees')
        .map((res : Response) => res.json())
        .catch((error : any) => Observable.throw('Server error'));
    }


    // getAllProducts() : Observable <product[]> {
    //     return this.httpclient.get(url)
    //       .map((res : Response) => res.json())
    //       .catch((error : any) => Observable.throw('Server error'));
    //   }


    // getHeroes(): Employee[] {
    //     return EMP;
    // }

    // getAllPosts(): Observable<Post[]> {
    
    //     return this.http.get('/api/posts')

    //     .map(res => res as Post[] || []); 
          
          
    // }



}