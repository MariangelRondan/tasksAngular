import { Component, computed, signal } from '@angular/core';
import {users} from './users';

const randomIndex = Math.floor(Math.random() * users.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = signal(users[randomIndex]);
  imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)

  // get imagePath(){ 
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * users.length)
this.selectedUser.set(users[randomIndex])
}

  
}
