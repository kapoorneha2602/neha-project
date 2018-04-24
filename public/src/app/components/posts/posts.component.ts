import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './posts.service';

import { Post } from './posts';

@Component({
    selector: 'posts-list',
    templateUrl: './posts.component.html'
})
export class PostListComponent {
    posts: Post[];
    constructor(private toastr: ToastrService, private postService: PostService) {
        console.log('in post component');
    }
    ngOnInit() {
        this.getAllPosts();
    }
    getAllPosts(): void {
        this.postService.getAllPosts()
            .subscribe(posts => this.posts = posts);
    }
}