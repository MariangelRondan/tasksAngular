import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TasksService } from './service/tasks.service';

export const routes: Routes = [
    {path: '',
        providers: [TasksService], //como los componentes son lazy loading, asi hago que el servicio sea tambien lazy loading
        children:[
            { path: '', redirectTo: 'task', pathMatch: 'full' }, 
            {
                path: 'task',
                component: HomeComponent, 
                children: [
                  { path: ':userId/new', loadComponent: () => import('./new-task/new-task.component').then(module => module.NewTaskComponent)  }, //lazy loading Ruta para '/:userId/new'
                  { path: ':userId/userTasks', loadComponent: () => import('./tasks/tasks.component').then(module => module.TasksComponent) }, // Ruta para '/:userId/userTasks'
                ]
              },

        ]
    },
   
      {path: '**', component: NotFoundComponent}
];
