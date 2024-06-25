import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/interfaces';
import { CardComponent } from '../ui/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  constructor(private tasksService: TasksService){}


  onCompleteTask(){
this.tasksService.removeTask(this.task.id)
  }

}
