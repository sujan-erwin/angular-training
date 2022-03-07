import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IPost } from 'src/app/shared/models/post';
import { PostsService } from 'src/app/shared/services/posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {

  @Input() userId: number | undefined;
  public listOfPosts: Array<IPost> = [];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.userId){
      this.getPostsByUserId(this.userId as number);
    }
  }

  getPostsByUserId(userId: number) {
    this.postsService.getPostsByUserId(userId).subscribe(posts => {
      this.listOfPosts = posts;
    }, error => {
      console.log('the error is', error);
    });
  }

}
