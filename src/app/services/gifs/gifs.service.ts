import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { APIResponseListGifs, Gif } from './gifs.models';
import { gifMapper } from './gifs.mapper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor(private http: HttpClient) {}

  getTrendings(): Observable<Gif[]> {
    return this.http
      .get<APIResponseListGifs>(
        `${environment.apiUrl}/trending?api_key=${environment.apiKey}&limit=20`
      )
      .pipe(map(({ data }: APIResponseListGifs) => data.map(gifMapper)));
  }

  getGifsByQuery(query: string): Observable<Gif[]> {
    return this.http
      .get<APIResponseListGifs>(
        `${environment.apiUrl}/search?api_key=${environment.apiKey}&limit=20&q=${query}`
      )
      .pipe(map(({ data }: APIResponseListGifs) => data.map(gifMapper)));
  }
}
