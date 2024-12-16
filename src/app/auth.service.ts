import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private role: string = '';

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'docente' && password === 'docente') {
      this.isLoggedIn = true;
      this.role = 'docente';
      return true;
    } else if (username === 'estudiante' && password === 'estudiante') {
      this.isLoggedIn = true;
      this.role = 'estudiante';
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.role = '';
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getRole(): string {
    return this.role;
  }
}
