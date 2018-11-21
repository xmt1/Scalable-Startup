import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import {MatSlideToggleModule, MatToolbarModule, MatCardModule, MatButtonModule} from '@angular/material';
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
    HttpClientModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
