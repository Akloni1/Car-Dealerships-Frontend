import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { INumberOfCarsInShowrooms } from './app.number-of-cars-in-showrooms.interface';
import { ICarInput } from './app.car-input.interface';
import { IStatus } from './app.status.interface';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'https://localhost:7194';
 

  constructor(private http: HttpClient) {}

  addCar(payload: ICarInput): Observable<IStatus> {
    return this.http.post<IStatus>(`${this.baseUrl}/car`, payload);
  }

  getNumberOfCarsInShowrooms(): Observable<INumberOfCarsInShowrooms[]> {
    return this.http.get<INumberOfCarsInShowrooms[]>(`${this.baseUrl}/car`);

  }

}
