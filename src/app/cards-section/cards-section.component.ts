import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Card } from '../models/card';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.css']
})
export class CardsSectionComponent implements OnInit {
  cards: Card[];

  constructor(
    private cardService: CardService,
    private backendService: BackendService
    ) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
    this.backendService.getCardData().subscribe(data => {
      console.log(data);
    });
  }

}
