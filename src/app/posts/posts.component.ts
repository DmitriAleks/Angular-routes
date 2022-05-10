import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {PostsService} from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showIds = false
  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log('params', params); //{showIds: 'true'}
      this.showIds = !!params.showIds
    })

    this.route.fragment.subscribe(fragment => {
      console.log('fragment1', fragment);
      
    })
  }
  showIdsProgram(){  //второй способо работы с квери параметрами, первый в шаблоне штмл
    this.router.navigate(['/posts'],{
      queryParams:{
        showIds: true
      },
      fragment:'program-fragment'
    })
  }
}
