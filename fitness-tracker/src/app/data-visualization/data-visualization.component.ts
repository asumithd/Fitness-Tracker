import { isPlatformBrowser, isPlatformServer, NgIf } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-data-visualization',
  standalone: true,
  imports: [BaseChartDirective, NgIf],
  templateUrl: './data-visualization.component.html',
  styleUrl: './data-visualization.component.scss',
})
export class DataVisualizationComponent implements OnInit {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  isBrowser = false;
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
    //   this.fitnessService.getMetrics().subscribe((metrics) => {
    //     this.lineChartData = {
    //       labels: metrics.map((metric) => metric.date.toDateString()),
    //       datasets: [
    //         {
    //           data: metrics.map((metric) => metric.weight),
    //           label: 'Weight (kg)',
    //           fill: false,
    //           tension: 0.4,
    //           borderColor: 'blue',
    //         },
    //         {
    //           data: metrics.map((metric) => metric.bodyFatPercentage),
    //           label: 'Body Fat (%)',
    //           fill: false,
    //           tension: 0.4,
    //           borderColor: 'red',
    //         },
    //       ],
    //     };
    //   });
    // }
  }
}
