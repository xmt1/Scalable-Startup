import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-alt-card',
  templateUrl: './alt-card.component.html',
  styleUrls: ['./alt-card.component.css']
})
export class AltCardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
