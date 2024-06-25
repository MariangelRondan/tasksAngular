import { Injectable } from '@angular/core';
import { users } from '../user/users';
import { User } from '../models/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = users;
  
getUserById(id: string){
 const user = this.users.find((user) =>  user.id === id)
return user
}

}
