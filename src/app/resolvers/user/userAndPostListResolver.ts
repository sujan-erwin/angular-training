import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';

import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { UsersService } from '../../shared/services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserAndPostListResolver implements Resolve<Observable<any>> {
  constructor(
    private UserService: UsersService,
    private postsService: PostsService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const userId = route.params.id;
      return forkJoin([
         this.UserService.getUserById(userId),
         this.postsService.getPostsByUserId(userId)
      ]);
  }
}
