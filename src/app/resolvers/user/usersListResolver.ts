import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { UsersService } from '../../shared/services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersListResolver implements Resolve<Observable<Array<IUser>>> {
  constructor(
    private UserService: UsersService
  ) {}

  resolve(): Observable<Array<IUser>> {
    return this.UserService.getAllUsers();
  }
}
