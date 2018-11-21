import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Card } from './models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private cardDataUrl = 'http://localhost:3000/api/cards'

  constructor(private http: HttpClient) { }

  getCardData() {
    return this.http.get(this.cardDataUrl);
  }
}
