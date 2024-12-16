import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard'; // Importa el guard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cambiar-contrasena',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherModule),
    canActivate: [AuthGuard] // Protege la ruta con AuthGuard
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./student/student.module').then( m => m.StudentModule),
    canActivate: [AuthGuard] // Protege la ruta con AuthGuard
  },
  {
    path: '**', // Ruta comodín
    component: PageNotFoundComponent, // Página 404
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
