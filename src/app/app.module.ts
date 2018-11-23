import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import {MatSlideToggleModule, MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { CardComponent } from './cards-section/card/card.component';
import { AltCardComponent } from './cards-section/alt-card/alt-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsSectionComponent,
    CardComponent,
    AltCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
