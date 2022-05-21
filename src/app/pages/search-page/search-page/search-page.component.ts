import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gif, ListGif } from '../../../services/gifs/gifs.models';
import { GifsService } from '../../../services/gifs/gifs.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public gifs: Gif[];
  public query: string;

  public totalGifs: number;
  public page: number;
  public limit: number;

  constructor(private gifsService: GifsService, private route: ActivatedRoute) {
    this.gifs = [];
    this.query = '';
    this.page = 1;
    this.totalGifs = 0;
    this.limit = 20;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ q }) => {
      this.gifs = [];
      this.query = q;
      this.getQueryGifs(q);
    });
  }

  getQueryGifs(query: string): void {
    this.gifsService.getGifsByQuery(query, this.page, this.limit).subscribe(
      ({ total_count, data }: ListGif) => {
        this.totalGifs = total_count;
        this.gifs = [...this.gifs, ...data];
      },
      (error: any) => {
        console.log(error);
        this.gifs = [...this.gifs];
      }
    );
  }

  handleLoadMore(): void {
    this.page++;
    this.getQueryGifs(this.query);
  }
}
