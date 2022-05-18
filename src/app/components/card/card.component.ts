import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() width: string;
  @Input() height: string;
  @Input() title: string;

  constructor() {
    this.image = '';
    this.title = '';
    this.width = '0';
    this.height = '0';
  }

  ngOnInit(): void {}

  getBackgroundImage(): string {
    return 'url(' + this.image + ')';
  }
}
