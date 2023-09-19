import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { UserService } from './user.service';
import { inject, Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable } from 'rxjs';

export const UserResolver: ResolveFn<User> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(UserService).getUser(+route.paramMap.get('id')!);
    };