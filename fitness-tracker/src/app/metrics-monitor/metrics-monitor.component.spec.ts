import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsMonitorComponent } from './metrics-monitor.component';

describe('MetricsMonitorComponent', () => {
  let component: MetricsMonitorComponent;
  let fixture: ComponentFixture<MetricsMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricsMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricsMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
