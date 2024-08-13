import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FitnessService {
  apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  addWorkout(workout: any): Observable<any> {
    return this.http.post(this.apiUrl + '/workouts', workout);
  }
  addFitnessGoal(fitnessGoal: any): Observable<any> {
    return this.http.post(this.apiUrl + '/fitnessGoals', fitnessGoal);
  }
  addMetric(metric: any): Observable<any> {
    return this.http.post(this.apiUrl + '/metrics', metric);
  }

  getWorkout(): Observable<any> {
    return this.http.get(this.apiUrl + '/workouts');
  }
  getFitnessGoal(): Observable<any> {
    return this.http.get(this.apiUrl + '/fitnessGoals');
  }
  getMetric(): Observable<any> {
    return this.http.get(this.apiUrl + '/metrics');
  }

  deleteWorkout(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + '/workouts/' + id);
  }
  deleteFitnessGoal(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + '/fitnessGoals/' + id);
  }
  deleteMetric(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + '/metrics/' + id);
  }
}
