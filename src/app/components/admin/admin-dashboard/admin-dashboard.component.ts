import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
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

  handleRegisterMember(): void {
    this.router.navigate(['admin/register-member']);
  }

  handleRegisterTrainer(): void {
    this.router.navigate(['admin/register-trainer']);
  }

  onLogOut(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
