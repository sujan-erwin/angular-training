import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public user: IUser | undefined;
  public userId: number | undefined;
  public isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
  ) {
    this.user = this.route.snapshot.data.userAndPostList[0];
  }
}
