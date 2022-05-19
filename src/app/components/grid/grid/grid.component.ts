import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() items: {
    id: string;
    title: string;
    url: string;
    width: string;
    height: string;
  }[];

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {}
}
