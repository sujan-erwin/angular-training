import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: IPost | undefined;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
