import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray: Array <Iusers> = [
    {
      userName: "jhon",
      id: 1
    },
    {
      userName: "july",
      id: 2
    },
    {
      userName: "stephen",
      id: 3
    }
  ]

  constructor() { }
  getAllArray(): Array<Iusers>{
    return this.usersArray
  }

  getSingleUser(id: number): Iusers{
    return this.usersArray.find(user => user.id===id)!

  }

  updateUser(uObj: Iusers){
    this.usersArray.forEach(user =>{
      if(user.id===uObj.id){
        user.userName = uObj.userName;
        user.id= uObj.id
      }
    })
  }
}
