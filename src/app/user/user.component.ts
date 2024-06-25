import { Component, Input, input, computed, signal, Output, EventEmitter, output } from '@angular/core';
import {users} from './users';
import { User } from '../models/interfaces';
import { CardComponent } from '../ui/card/card.component';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent,RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  //name = input.required<string>(); inputs with signals
  @Output() select = new EventEmitter<string>();
  @Input() selected!: boolean;
  //lo mismo, pero sin output decorator. More modern way ->  select = output<string>();
 
  constructor(private router:Router){}

  get imagePath(){ 
  return 'assets/users/' + this.user?.avatar;  
  }

  onSelectUser(){
    this.select.emit(this.user.id);
    console.log(this.user)
    this.router.navigate([`task/${this.user.id}/userTasks`]);  }

  
}
