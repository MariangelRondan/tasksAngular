import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../models/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit {
  @Output() closeForm = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<newTask>();
  @Input() userId!:string;
  formTitle ='';
  formSummary ='';
  formDate ='';
  //same using signals
  // formTitle = signal(''); in the html is the same.
  // formSummary =signal('');
  // formDate =signal('');
  constructor(private TasksService: TasksService, private router: Router ){}
  
 
    ngOnInit(): void {
    console.log(this.userId)
  }
     
  onCancel(){
    this.closeForm.emit()
  }

  onSubmit(){
this.TasksService.addTask(
  {
      title: this.formTitle,
      summary: this.formSummary,
      date: this.formDate
    }, this.userId
)
this.router.navigate([`/task/${this.userId}/userTasks`])
    // this.addTask.emit({
    //   title: this.formTitle,
    //   summary: this.formSummary,
    //   date: this.formDate
    // })
    // this.closeForm.emit()
  }

}
