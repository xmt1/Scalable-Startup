import { Component } from '@angular/core';
import { CardService } from './cards-section/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cardService: CardService) {}

  title = 'scalable-startups';

  onSlideToggle() {
    this.cardService.changeCardLayout();
    console.log(this.cardService.isAltCards);
  }
}
