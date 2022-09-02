import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
  FormControl,
} from '@angular/forms';

import { Subscription } from 'rxjs';


import { INumberOfCarsInShowrooms } from './app.number-of-cars-in-showrooms.interface';
import { ICarOutput } from './app.car-output.interface';
import { CarService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  response: INumberOfCarsInShowrooms[]=[];
  form: FormGroup;
  error: any
  car: ICarOutput={
    idCar: 0,
    stamp: "",
    color: "",   
    idCarDealership: 0   
  };

  private subscriptions$ = new Subscription();

  constructor(private fb: FormBuilder, private carService: CarService) {
    this.form = this.fb.group({
      stamp: [null, Validators.required],
      color: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.GetNumberOfCarsInShowrooms();
    console.log(this.response);
  }

  submit() {
    this.subscriptions$.add(
      this.carService.addCar(this.form.value).subscribe((response: ICarOutput) => {
        this.car = response
      },
      (error) => {
        this.error = error.error
        this.error = this.error.split(' ')[1]
        console.log(error)
      }
      )
    );
    this.GetNumberOfCarsInShowrooms();
  }
  GetNumberOfCarsInShowrooms(){
    this.subscriptions$.add(
      this.carService.getNumberOfCarsInShowrooms().subscribe((response: INumberOfCarsInShowrooms[]) => {
        
        this.response = response;
      })
    );
  }

  

  displayedColumns: string[] = ['nameCarDealership', 'stamp', 'color', 'count'];
 
}
