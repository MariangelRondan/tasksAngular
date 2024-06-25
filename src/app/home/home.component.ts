import { Component, OnInit } from '@angular/core';
import { users } from '../user/users';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from '../task/task.component';
import { TasksComponent } from '../tasks/tasks.component';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent, TasksComponent, NewTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  users= users;
  selectedUserId!: string;
  showForm = false;

  constructor(private router: Router){}

  ngOnInit(): void {
this.checkRoute() 
 }

  checkRoute(){
    const url = this.router.url;
    if(url.includes('newTask')){
      this.showForm = true
    } else {
      this.showForm= false;
    }
  }

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)
  }

  onSelectUser(id: string){
   this.selectedUserId = id;
  }

}
