import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-register-trainer',
  standalone: true,
  imports: [],
  templateUrl: './register-trainer.component.html',
  styleUrl: './register-trainer.component.css',
})
export class RegisterTrainerComponent {
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
}
