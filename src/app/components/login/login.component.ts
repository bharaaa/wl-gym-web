import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  credentials: any = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (res: any) => {
        const token = res.data.token;
        this.authService.setToken(token);

        const name = res.data.name;
        this.authService.setName(name);

        if (res.data.role == 'ADMIN') {
          this.router.navigate(['admin/dashboard']);
        } else if (res.data.role == 'MEMBER') {
          this.router.navigate(['member/dashboard']);
        } else {
          this.router.navigate(['trainer/dashboard']);
        }
      },
      error: (err) => {
        console.log(err.error.responseMessage);
      },
    });
  }

  private current: anime.AnimeInstance | null = null;

  ngOnInit(): void {
    this.setupAnimations();
  }

  ngOnDestroy(): void {
    if (this.current) {
      this.current.pause();
    }
  }

  private setupAnimations(): void {
    document.querySelector('#email')?.addEventListener('focus', () => {
      if (this.current) this.current.pause();
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    });

    document.querySelector('#password')?.addEventListener('focus', () => {
      if (this.current) this.current.pause();
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    });
  }
}
