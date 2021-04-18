import { Component, OnInit } from '@angular/core';
import { SelectService } from '../select.service';
import { Country,State } from '../countrystate';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  selectedCountry: Country = new Country(2, 'India');
  countries: Country[];
  states: State[];
  selectedDate: Date;
  enteredCountry: String;
  selectedState: string;

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
    this.selectedDate = new Date();
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
    this.enteredCountry = countryid ==1 ? "USA" : "India"
    
  }
  
  submitForm(){
    if(this.enteredCountry?.length>1 && this.selectedDate && this.selectedState?.length>1){
      Swal.fire({
        title: 'Submitted Details',
        html: `<div class="container">
        <div class="row">
          <div class="col">
          Country   : 
          </div>
          <div class="col">
          <span style="color: red">${this.enteredCountry}</span>
          </div>
          </div>
          <hr/>
          <div class="row">
          <div class="col">
          State : 
          </div>
          <div class="col">
          <span style="color: red">${this.selectedState}</span>
          </div>
          </div>
          <hr/>
          <div class="row">
          <div class="col">
          Date&Time  :
          </div>
          <div class="col">
          <span style="color: red">${this.selectedDate}</span>
          </div>
          </div>
          </div>`,
        icon: 'success',
        showCancelButton: false
      })
    }
    else if(this.enteredCountry?.length === 0 || !this.enteredCountry){
      Swal.fire('Oops...', 'Country Is Required', 'error')
    }
    else if(this.selectedState?.length === 0 || !this.selectedState){
      Swal.fire('Oops...', 'State Is Required', 'error')
    }
    else if(!this.selectedDate){
      Swal.fire('Oops...', 'Please Select The Date', 'error')
    }
  }
}
