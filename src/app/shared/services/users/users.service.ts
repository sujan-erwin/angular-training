import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = environment.jsonplaceholderUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUsers(): Observable<Array<IUser>>{
     const requestUrl = `${this.baseUrl}/users`;
     return this.httpClient.get<Array<IUser>>(requestUrl).pipe(
       map((users) => {
          return users;
       }),
       catchError(error => {
         return throwError(error);
       })
     );
  }

  getUserById(userId: number): Observable<IUser>{
    const requestUrl = `${this.baseUrl}/users/${userId}`;
    return this.httpClient.get<IUser>(requestUrl).pipe(
      map((user) => {
         return user;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

}
