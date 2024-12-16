import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { CrudTeacherComponent } from './crud-teacher/crud-teacher.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent
  },
  {
    path: 'crud',
    component: CrudTeacherComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TeacherRoutingModule { }
