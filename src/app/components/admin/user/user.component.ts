import { Component } from '@angular/core';
import { GymService } from '../../../services/gym/gym.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  members: any[] = [];

  constructor(private gymService: GymService) {}

  ngOnInit(): void {
    this.gymService.getUser().subscribe((data) => {
      this.members = data;
    });
  }
}
