import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs/gifs.service';
import { Gif } from '../../services/gifs/gifs.models';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public trendings: Gif[];

  constructor(private gifsService: GifsService) {
    this.trendings = [];
  }

  ngOnInit(): void {
    this.getTrendingGifs();
  }

  getTrendingGifs(): void {
    this.gifsService.getTrendings().subscribe(
      (response: Gif[]) => {
        this.trendings = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
