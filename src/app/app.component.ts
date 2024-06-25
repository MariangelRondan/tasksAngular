import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { users } from './user/users';
import { User } from './models/interfaces';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NewTaskComponent, RouterOutlet, UserComponent, HeaderComponent, TasksComponent]
})
export class AppComponent implements OnInit{
  title = 'tasks';
  users= users;
  selectedUserId!: string;
  showForm = false;

  constructor(private router: Router, private activeRoute: ActivatedRoute){
    
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.updateSelectedUser();
    }
  });
  }

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

  onSelectUser(userId: string){
   this.selectedUserId = userId;
   this.router.navigate([`${userId}/tasks`], { relativeTo: this.activeRoute });
  }

  updateSelectedUser(): void {
    // Obtener el ID del usuario desde la ruta actual
    const userId = this.activeRoute.snapshot.firstChild?.params['userId'];
    this.selectedUserId = userId || null;
  }


}
