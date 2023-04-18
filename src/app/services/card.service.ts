import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardResponse } from '../interface/card.interface';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CardService {
  API_URL ='https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http: HttpClient) { }

  getCards() {
    const params = {
      num: 100,
      offset: 100,
    };
    return this.http.get<CardResponse[]>(this.API_URL, {params}).pipe(
      map((res: any) => res.data)
    )
  }
}
