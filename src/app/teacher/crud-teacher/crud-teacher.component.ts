import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-crud-teacher',
  templateUrl: './crud-teacher.component.html',
  styleUrls: ['./crud-teacher.component.scss']
})
export class CrudTeacherComponent implements OnInit {
  users: any[] = [];
  currentUser: any = { id: null, name: '', username: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log("users", this.users);
  }

  // Editar usuario
  editUser(user: any) {
    this.currentUser = { ...user };
  }

  // Guardar usuario (Agregar o Actualizar)
  saveUser() {
    if (this.currentUser.id) {
      this.userService.updateUser(this.currentUser);
    } else {
      this.userService.addUser(this.currentUser);
    }
    this.currentUser = { id: null, name: '', username: '', email: '' };
    this.users = this.userService.getUsers(); // Actualizar la tabla
  }

  // Eliminar usuario
  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers(); // Actualizar la tabla
  }
}
