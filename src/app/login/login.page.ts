import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa el Router para la navegación
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';  
  password: string = '';  

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    
  }

  // Método que se ejecuta cuando se hace submit en el formulario
  login() {
    if (this.authService.login(this.username, this.password)) {
      console.log(" user", this.username);
      console.log(" pass", this.password);
      const role = this.authService.getRole();
      this.router.navigate([`/${role}`]); // Redirige al módulo correspondiente
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
  
  resetPassword() {
    this.router.navigate(['/cambiar-contrasena']); //el comando reset navega hacia el path cambiar contraseña en app module
  }

  
}
