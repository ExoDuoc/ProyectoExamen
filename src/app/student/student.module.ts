import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    IonicModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
