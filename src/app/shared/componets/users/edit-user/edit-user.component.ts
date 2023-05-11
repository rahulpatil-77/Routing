import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId!: number;
  selectedUser!: Iusers;
  constructor(private _route: ActivatedRoute, private _usersService: UsersService, private _router: Router) { }

  ngOnInit(): void {
    this.userId= +this._route.snapshot.params['usersId']
    this.selectedUser= this._usersService.getSingleUser(this.userId)!
    // console.log(this.selectedUser);
    
  }

  onUpdateUser(username: HTMLInputElement, id: HTMLSpanElement){
    let obj: Iusers ={
      userName: username.value,
      id: this.userId,
    };
    this._usersService.updateUser(obj)
    this._router.navigate(['users', this.userId])

}
}
