import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CardResponse } from 'src/app/interface/card.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cards: CardResponse[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((res) => {
      console.log(res);
      this.cards = res;
    });
  }

}
