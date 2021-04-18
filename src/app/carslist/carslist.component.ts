import { Component, OnInit } from '@angular/core';
import {carsData} from './cars';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carslist',
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css']
})
export class CarslistComponent implements OnInit {
  cars = carsData; 
  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(car){
    const {Name, Miles_per_Gallon, Cylinders, Displacement, Horsepower, Weight_in_lbs, Acceleration, Year, Origin, image} = car;
    Swal.fire({
      title: Name,
      html: `<div class="container">
      <div class="row">
        <div class="col">
          Miles_per_Gallon  : 
        </div>
        <div class="col">
          <span style="color: crimson;">${Miles_per_Gallon}</span>
        </div>
        </div>
        <hr/>
        <div class="row">
        <div class="col">
          Cylinders  : 
        </div>
        <div class="col">
          <span style="color: crimson;">${Cylinders}</span>
        </div>
        </div>
        <hr/>
        <div class="row">
        <div class="col">
          Displacement  : 
        </div>
        <div class="col">
          <span style="color: crimson;">${Displacement}</span>
        </div>
        </div>
        <hr/>
        <div class="row">
        <div class="col">
          Horsepower  : 
        </div>
        <div class="col">
          <span style="color: crimson;">${Horsepower}</span>
        </div>
        </div>
        <hr/>
        <div class="row">
        <div class="col">
          Weight_in_lbs  : 
        </div>
        <div class="col">
          <span style="color: crimson;">${Weight_in_lbs}</span>
        </div>
        </div>
        <hr/>
        <div class="row">
        <div class="col">
           Acceleration  : 
        </div>
        <div class="col">
          <span style="color: crimson;">${ Acceleration}</span>
        </div>
        </div>
        <hr/>
        <div class="row">
        <div class="col">
          Year  : 
        </div>
        <div class="col">
          <span style="color: crimson;">${Year}</span>
        </div>
        </div>
        <hr/>
        <div class="row">
        <div class="col">
          Origin  : 
        </div>
        <div class="col">
          <span style="color: crimson;">${Origin}</span>
        </div>
        </div>
      </div>`,
      imageUrl: image,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Close'
    })
  }

}
