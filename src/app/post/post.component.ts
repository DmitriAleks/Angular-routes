import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    post: Post

    constructor(private route: ActivatedRoute,
                private postService: PostsService,
                private router: Router
    ) {
    }

    ngOnInit(): void {
        //this.post = this.route.snapshot.data.post // snapshot статический объект и не видет динамический изменений
        this.route.data.subscribe(data => {
            this.post = data.post
        })
        // this.route.params.subscribe((params: Params)=>{
        //   this.post = this.postService.getById(+params.id)
        // })
    }

    loadedPost() {
        this.router.navigate(['/posts', 44])
    }

}
