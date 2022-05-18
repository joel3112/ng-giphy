import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gif } from '../../../services/gifs/gifs.models';
import { GifsService } from '../../../services/gifs/gifs.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public gifs: Gif[];
  public query: string;

  constructor(private gifsService: GifsService, private route: ActivatedRoute) {
    this.gifs = [];
    this.query = '';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ q }) => {
      this.query = q;
      this.getQueryGifs(q);
    });
  }

  getQueryGifs(query: string): void {
    this.gifsService.getGifsByQuery(query).subscribe(
      (response: Gif[]) => {
        this.gifs = response;
      },
      (error: any) => {
        console.log(error);
        this.gifs = [];
      }
    );
  }
}
