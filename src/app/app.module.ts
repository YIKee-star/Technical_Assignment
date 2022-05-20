import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { UpdateComponent } from './update/update.component';
import { NameFilterPipe } from './pipes/nameFilter.pipe';
import { AgeFilterPipe } from './pipes/ageFilter.pipe';
import { StartDateFilterPipe } from './pipes/start-date-filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],   
  declarations: [AppComponent,UpdateComponent, NameFilterPipe, AgeFilterPipe, StartDateFilterPipe],  

  bootstrap:    [ AppComponent ],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
