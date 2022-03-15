import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAndPostListResolver } from '../resolvers/user/userAndPostListResolver';
import { UsersListResolver } from '../resolvers/user/usersListResolver';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
   {
     path: '',
     resolve: {
       users: UsersListResolver
     },
     component: UsersComponent
   },
   {
     path: ':id',
     resolve: {
       userAndPostList: UserAndPostListResolver,
     },
     component: UserComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
