import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    
    { path: '', redirectTo: 'task', pathMatch: 'full' }, 
    {
        path: 'task',
        component: HomeComponent, // Componente raíz (podría ser AppComponent en tu caso)
        children: [
          { path: ':userId/new', component: NewTaskComponent }, // Ruta para '/:userId/new'
          { path: ':userId/userTasks', component: TasksComponent }, // Ruta para '/:userId/userTasks'
        ]
      },
      {path: '**', component: NotFoundComponent}
];
