import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Importamos ActivatedRoute para acceder a los parámetros
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  username: string = '';  // Variable para almacenar el nombre de usuario

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    // Capturamos el nombre de usuario desde los parámetros de la URL
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username') || '';  // 'username' es el parámetro que se pasó desde la página de login // Manejar el caso donde el valor sea null
    });
  }

  
}
