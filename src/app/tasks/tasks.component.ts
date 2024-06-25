import { Component, input, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  order= input<"asc" | "desc">() 
  tasks: Task[] = tasksData;


  
constructor(private usersService: UsersService, private taskService: TasksService, private activeRoute: ActivatedRoute){}
  

  ngOnInit(): void {
this.getUserName() 

 }





get selectedUserTasks() {
  this.tasks = this.taskService.getUserTasks(this.userId);

  if (this.order() === 'desc') {
    return this.tasks.sort((a, b) => b.id.localeCompare(a.id));
  } else {
    return this.tasks.sort((a, b) => a.id.localeCompare(b.id));
  }
}

  onCompleteTask(id: string){
  this.taskService.removeTask(id);
  }

  getUserName(){
    const user: User | undefined = this.usersService.getUserById(this.userId); 

    if (user) {
      this.userName = user.name;
    } 
  }


  onAddTask(task: newTask){

    this.taskService.addTask(task, this.userId)

  }

}
