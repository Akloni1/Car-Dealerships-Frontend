import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { INumberOfCarsInShowrooms } from './app.number-of-cars-in-showrooms.interface';
import { ICarInput } from './app.car-input.interface';
import { ICarOutput } from './app.car-output.interface';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'https://localhost:7194';
 
  errorMessage: String = "";
  constructor(private http: HttpClient) {}

  addCar(payload: ICarInput): Observable<ICarOutput>{
    return this.http.post<ICarOutput>(`${this.baseUrl}/car`, payload)
    
  }

  getNumberOfCarsInShowrooms(): Observable<INumberOfCarsInShowrooms[]> {
    return this.http.get<INumberOfCarsInShowrooms[]>(`${this.baseUrl}/car`);

  }

}
