import { Component, OnInit } from '@angular/core';
import { GifsService } from './services/gifs/gifs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public searchValue: string;

  constructor(
    private gifsService: GifsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.searchValue = '';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ q }) => {
      this.searchValue = q;
    });
  }

  handleSearchGifs($event: string) {
    this.router.navigate(['/search'], { queryParams: { q: $event } });
  }
}
