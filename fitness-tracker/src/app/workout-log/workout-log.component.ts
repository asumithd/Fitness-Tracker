import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-workout-log',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './workout-log.component.html',
  styleUrl: './workout-log.component.scss',
  providers: [FitnessService],
})
export class WorkoutLogComponent implements OnInit {
  workouts: any[] = [];
  newWorkout = { date: new Date(), type: '', duration: 0, caloriesBurned: 0 };
  constructor(private fitnessService: FitnessService) {}
  ngOnInit(): void {
    this.getWorkOut();
  }
  addWorkout() {
    console.log(this.newWorkout, 'newWorkout');
    this.fitnessService.addWorkout(this.newWorkout).subscribe({
      next: (res) => {
        console.log(res, 'res');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  getWorkOut() {
    this.fitnessService.getWorkout().subscribe((res) => {
      this.workouts = res;
      console.log(res, 'ress');
    });
  }
  deleteWorkOut(id: string) {
    this.fitnessService.deleteWorkout(id).subscribe((res) => {
      console.log(res, 'ress');
      this.getWorkOut();
    });
  }
}
