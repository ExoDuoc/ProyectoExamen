import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent  implements OnInit {

  constructor(    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);}
}
