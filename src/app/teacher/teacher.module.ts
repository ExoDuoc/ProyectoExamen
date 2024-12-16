import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa el módulo de Ionic
import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { CrudTeacherComponent } from './crud-teacher/crud-teacher.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TeacherRoutingModule,  
    QRCodeModule,
    FormsModule  
  ],
  declarations: [TeacherComponent, CrudTeacherComponent]
})
export class TeacherModule { }
