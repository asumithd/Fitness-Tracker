import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-goal-setting',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './goal-setting.component.html',
  styleUrl: './goal-setting.component.scss',
  providers: [FitnessService],
})
export class GoalSettingComponent implements OnInit {
  goals: any[] = [];
  newGoal = { goal: '', targetDate: new Date(), progress: 0 };

  constructor(private fitnessService: FitnessService) {}
  ngOnInit(): void {
    this.getGoal();
  }
  addGoal() {
    console.log(this.newGoal, 'newGoal');
    this.fitnessService.addFitnessGoal(this.newGoal).subscribe({
      next: (res) => {
        console.log(res, 'res');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  getGoal() {
    this.fitnessService.getFitnessGoal().subscribe((res) => {
      this.goals = res;
      console.log(res, 'ress');
    });
  }
  deleteGoal(id: string) {
    this.fitnessService.deleteFitnessGoal(id).subscribe((res) => {
      console.log(res, 'ress');
      this.getGoal();
    });
  }
}
