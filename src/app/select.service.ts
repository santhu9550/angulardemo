import { Injectable } from '@angular/core';
import { Country,State } from './countrystate';

@Injectable()
export class SelectService {

  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Arizona' ),
     new State(2, 1, 'Alaska' ),
     new State(3, 1, 'Florida'),
     new State(4, 1, 'Hawaii'),
     new State(5, 2, 'Goa' ),
     new State(6, 2, 'Gujarat'),
     new State(7, 2, 'Telangana' ),
     new State(8, 2, 'kerala' ),
    ];
  }

}