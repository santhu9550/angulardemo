import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { databinding } from './databinding/databinding.component';
import {MatInputModule} from '@angular/material/input';
import { FormsComponent } from './forms/forms.component';
import { SelectService } from './select.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CarslistComponent } from './carslist/carslist.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    databinding,
    FormsComponent,
    CarslistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatTabsModule, MatButtonModule,MatDividerModule,MatTableModule, MatCardModule,MatGridListModule,MatSelectModule,FormsModule,MatInputModule
  ],
  providers: [
    SelectService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
