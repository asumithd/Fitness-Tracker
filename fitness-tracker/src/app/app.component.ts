import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutLogComponent } from './workout-log/workout-log.component';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';
import { MetricsMonitorComponent } from './metrics-monitor/metrics-monitor.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WorkoutLogComponent,
    GoalSettingComponent,
    MetricsMonitorComponent,
    DataVisualizationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fitness-tracker';
}
