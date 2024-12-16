import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from 'src/models/alumno.interface';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent  implements OnInit {

  inputText: string = '';
  qrCodeData: string | null = null;
  alumnos: Alumno[] = [];
  nuevoAlumno: Alumno = { nombre: '', correo: '', seccion: ''};

  constructor(    private authService: AuthService,
    private router: Router, private alumnosService: AlumnosService) { }

  ngOnInit(
  ) {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.alumnosService.getAlumnos().subscribe((data) => {
      this.alumnos = data;
    });
  }

  agregarAlumno() {
    if (!this.nuevoAlumno.nombre || !this.nuevoAlumno.correo || !this.nuevoAlumno.seccion) {
      alert('Todos los campos son obligatorios');
      return;
    }
  
    this.alumnosService.addAlumno({
      nombre: this.nuevoAlumno.nombre,
      correo: this.nuevoAlumno.correo,
      seccion: this.nuevoAlumno.seccion
    }).subscribe(() => {
      this.cargarAlumnos();
      this.nuevoAlumno = { id: 0, nombre: '', correo: '', seccion: '' };
    });
  }

  eliminarAlumno(id: number) {
    this.alumnosService.deleteAlumno(id).subscribe(() => {
      this.cargarAlumnos();
    });
  }
  
  editarAlumno(alumno: Alumno) {
    this.nuevoAlumno = { ...alumno }; // Incluye el id si está presente
  }
  
  actualizarAlumno() {
    if (this.nuevoAlumno.id) {
      this.alumnosService.updateAlumno(this.nuevoAlumno.id, this.nuevoAlumno).subscribe(() => {
        this.cargarAlumnos();
        this.nuevoAlumno = { nombre: '', correo: '', seccion: '' };
      });
    } else {
      alert('No se puede actualizar un alumno sin ID.');
    }
  }
  
  generateQR() {
    if (this.inputText.trim()) {
      this.qrCodeData = 'localhost:8100/login'
    } else {
      console.error('Por favor, introduce un texto válido.');
    }
  }

  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
