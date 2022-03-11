import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public listOfPosts: Array<IPost> = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.listOfPosts = this.route.snapshot.data.userAndPostList[1];
  }

}
