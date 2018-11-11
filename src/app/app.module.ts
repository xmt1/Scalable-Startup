import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSlideToggleModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { CardComponent } from './cards-section/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsSectionComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
