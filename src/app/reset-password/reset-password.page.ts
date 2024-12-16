import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router para la navegación


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {

  username?: string;  // Propiedad para almacenar el nombre de usuario o correo

  constructor(private router: Router) {}

  // Método para manejar la recuperación de la contraseña
  recoverPassword() {
    if (this.username) { 
      alert('Correo enviado');
      console.log('Recuperar contraseña para:', this.username);

      // Puedes mostrar un mensaje o redirigir a otra página
      this.router.navigate(['/login']);
    } else {
      console.log('Por favor ingresa tu nombre de usuario o correo');
    }
  }
}
