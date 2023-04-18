import { Component, Input, OnInit } from '@angular/core';
import { CardResponse } from 'src/app/interface/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cards!: CardResponse;

  constructor() {}

  ngOnInit(): void {}

}
