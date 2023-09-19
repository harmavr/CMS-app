import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.onGetUsers();
      //this.onDeleteUser(5);
    
  }

  onGetUsers() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('done getting users')
      }
    )
  }

  onDeleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (response) => {
        console.log('Repsonse from delete' + response)
        // this.users = response;
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('done deteling user')
      }
    )
  }
}
