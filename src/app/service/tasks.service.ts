import { Injectable } from '@angular/core';
import { tasksData } from '../tasks/tasks';
import { Task, newTask } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[]= tasksData;

  constructor() { 
    const tasks = localStorage.getItem('tasks')
    if(tasks){
      this.tasks = JSON.parse(tasks)
    }
  }
  

  getUserTasks(userId: string){
    return this.tasks.filter((task: Task) => task.userId === userId)
  }

  addTask(taskData: newTask, userId: string) {
    const newTask = {
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    };

    this.tasks.unshift(newTask);

    this.saveTasks();
  }

  removeTask(id: string) {
 
    this.tasks = this.tasks.filter(task => task.id !== id);

    this.saveTasks();
  }


  
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}







