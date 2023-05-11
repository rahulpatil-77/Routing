import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/products';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usersid!: number
  usersObj!: Iusers
  constructor(private _route: ActivatedRoute, private _usersService: UsersService) { }

  ngOnInit(): void {
    this.usersid= +this._route.snapshot.params['usersId']
    // console.log(this.usersid);
    this.usersObj= this._usersService.getSingleUser(this.usersid)
    console.log(this.usersObj);  
  }

}
