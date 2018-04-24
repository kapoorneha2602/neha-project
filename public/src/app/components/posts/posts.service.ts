import { Injectable } from '@angular/core';

import { Post } from './posts';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) { }
    getAllPosts(): Observable<Post[]> {
        return this.http.get('/api/posts')
            .map(res => res as Post[] || []);
    }
}