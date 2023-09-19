import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { UserService } from './service/user.service';
import { User } from './interface/user';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Api';
  private user: any = 
    {
      'id' : 2,
      'name': 'Charis Graham',
      'username': 'Charis',
      'email': 'charis@april.biz',
    }
    users: User[];

    fileStatus = { status: '', percentage: 0 }

  constructor(private userService: UserService) {}

  
  ngOnInit(): void {
  }

  onCreateUser() {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('done creating user')
      }
    )
  }

  onUpdateUser() {
    this.userService.updateUser(this.user).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('done updating user')
      }
    )
  }

  onPatchUser() {
    this.userService.patchUser(this.user).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('done patching user')
      }
    )
  }
}
