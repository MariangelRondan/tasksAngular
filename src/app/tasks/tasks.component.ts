import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, User, newTask } from '../models/interfaces';
import { TaskComponent } from '../task/task.component';
import { tasksData } from './tasks';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../service/tasks.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ RouterLink, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  @Input() userName!: string ;
  @Input() userId!: string;
  addTask= false;

  constructor(private usersService: UsersService, private taskService: TasksService, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {
this.getUserName() 
 }

  tasks: Task[] = tasksData;

  get selectedUserTasks(){
this.tasks = this.taskService.getUserTasks(this.userId)
return this.tasks;
  }

  onCompleteTask(id: string){
  this.taskService.removeTask(id);
  }

  getUserName(){
    const user: User | undefined = this.usersService.getUserById(this.userId); // Ajustar el tipo según tu implementación

    if (user) {
      this.userName = user.name; // Asignar el nombre del usuario si existe
    } 
  }


  onAddTask(task: newTask){

    this.taskService.addTask(task, this.userId)

  }

}
