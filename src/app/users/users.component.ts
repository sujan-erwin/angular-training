import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddress } from '../shared/models/address';
import { IUser } from '../shared/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public displayedColumns: string[] = ['id','name','username','email','address','phone','website','company'];
  public listOfUsers: Array<IUser> = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.listOfUsers = this.route.snapshot.data.users;
  }

  navigateToUserById(user: IUser){
      this.router.navigate(['users', user.id]);
  }

  concatAddress(address: IAddress): String{
    return `${address.street},${address.suite},${address.city},${address.zipcode}`;
  }
}
