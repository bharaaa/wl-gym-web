import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './member-dashboard.component.html',
  styleUrl: './member-dashboard.component.css',
})
export class MemberDashboardComponent {
  name: string | null = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.name = this.authService.getName();

    if (!this.name) {
      console.log('User not logged in, redirect to login');
    } else {
      console.log('Welcome:', this.name);
    }
  }

  onLogOut(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
