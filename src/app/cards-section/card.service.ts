import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { CARDS } from '../data/card-data';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: Card[] = CARDS;

  constructor() { }

  getCards() {
    return this.cards;
  }
}
