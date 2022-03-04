import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../shared/models/user';
import { UsersService } from '../shared/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public listOfUsers: Array<IUser> = [];
  public userId: number = -1;
  constructor(
    private usersService: UsersService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
     this.userId = this.router.snapshot.params.id;
     if(this.userId && this.userId > 0){
          this.getUserById(this.userId);
     } else {
       this.getAllUsers();
     }
  }

  getAllUsers(){
      this.usersService.getAllUsers().subscribe((users) => {
          this.listOfUsers = users;
      }, error => {
          console.log('the error ', error)
      });
  }

  getUserById(userId: number){
    this.usersService.getUserById(userId).subscribe((user) => {
        this.listOfUsers = [user];
    }, error => {
        console.log('the error ', error)
    });
}

}
