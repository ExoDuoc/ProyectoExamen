import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    users = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        // Añadir otros usuarios los otros usuarios del archivo db.json
      ];
    
  constructor() { }

  // Obtener todos los usuarios
  getUsers() {
    return this.users;
  }

  // Crear un nuevo usuario
  addUser(user: any) {
    user.id = this.users.length + 1; // Generar un nuevo ID
    this.users.push(user);
  }

  // Actualizar un usuario
  updateUser(updatedUser: any) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  // Eliminar un usuario
  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
