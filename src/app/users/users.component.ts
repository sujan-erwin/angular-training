import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../shared/models/user';
import { UsersService } from '../shared/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public listOfUsers: Array<IUser> = [];
  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getAllUsers().subscribe((users) => {
      this.listOfUsers = users;
    }, error => {
      console.log('the error ', error)
    });
  }

  navigateToUserById(user: IUser){
      this.router.navigate(['users', user.id]);
  }
}
