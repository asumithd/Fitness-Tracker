import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-metrics-monitor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './metrics-monitor.component.html',
  styleUrl: './metrics-monitor.component.scss',
  providers: [FitnessService],
})
export class MetricsMonitorComponent implements OnInit {
  metrics: any[] = [];
  newMetric = { date: new Date(), weight: 0, bodyFatPercentage: 0 };

  constructor(private fitnessService: FitnessService) {}
  ngOnInit(): void {
    this.getMetric();
  }
  addMetric() {
    console.log(this.newMetric, 'newMetric');
    this.fitnessService.addMetric(this.newMetric).subscribe({
      next: (res) => {
        console.log(res, 'res');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  getMetric() {
    this.fitnessService.getMetric().subscribe((res) => {
      this.metrics = res;
      console.log(res, 'ress');
    });
  }
  deleteMetric(id: string) {
    this.fitnessService.deleteMetric(id).subscribe((res) => {
      console.log(res, 'ress');
      this.getMetric();
    });
  }
}
