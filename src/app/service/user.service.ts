import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Observable, catchError, map, of, retry, switchMap, tap, throwError } from 'rxjs'
import { User } from '../interface/user';
import { Address } from '../interface/address';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = environment.apiUrl
  readonly moreParams = ['test', 'test2'];
  readonly deafaultImage = 'https://robohash.org/'; 
 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> { 
    return this.http.get<User[]>(`${this.apiUrl}users`)
    .pipe(
      map(users => users.map(user => ({
        id: user.id,
        email: user.email,
        website: user.website,
        phone: user.phone,
        username: user.username,
        address: user.address,
        image: `${this.deafaultImage}/${user.username.toLowerCase()}`,
        name: user.name.toUpperCase(),
        isAdmin: user.id === 10? 'admin' : 'user',
        searchKey: [user.name, user.username]
      })))
    )
  }
 

  getUser(id: number ): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}users/${id}`).pipe(
      map(user => ({
        id: user.id,
        email: user.email,
        website: user.website,
        phone: user.phone,
        username: user.username,
        address: user.address,
        image: `${this.deafaultImage}/${user.username.toLowerCase()}`,
        name: user.name.toUpperCase(),
        isAdmin: user.id === 10 ? 'admin' : 'user',
        searchKey: [user.name, user.username]
      }))
    );
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}users`, user)
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}users/${user.id}`, user)
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}users/${user.id}`, user)
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}users/${id}`)
  }
}
