import { Component, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { GymService } from '../../../services/gym/gym.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register-member',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastModule, ButtonModule],
  templateUrl: './register-member.component.html',
  styleUrl: './register-member.component.css',
  providers: [MessageService],
})
export class RegisterMemberComponent {
  private current: anime.AnimeInstance | null = null;
  memberData: any = { name: '', email: '', password: '' };

  constructor(
    private gymService: GymService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.setupAnimations();
  }

  ngOnDestroy(): void {
    if (this.current) {
      this.current.pause();
    }
  }

  private setupAnimations(): void {
    document.querySelector('#name')?.addEventListener('focus', () => {
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

    document.querySelector('#email')?.addEventListener('focus', () => {
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

    document.querySelector('#password')?.addEventListener('focus', () => {
      if (this.current) this.current.pause();
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -672,
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

  @ViewChild('memberForm') memberForm!: NgForm;

  onSubmit() {
    if (this.memberForm.valid) {
      this.gymService.registerMember(this.memberData).subscribe({
        next: (res: any) => {
          console.log('Response: ', res);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  showToast() {
    if (this.memberForm.valid) {
      this.messageService.add({
        severity: 'success',
        detail: 'Success Register Member',
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        detail: 'Form must be filled!',
      });
    }
  }
}
