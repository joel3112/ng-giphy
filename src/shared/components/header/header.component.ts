import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() logo: string;
  @Input() title: string;
  @Input() searchValue: string;

  @Output() onSearch = new EventEmitter<string>();

  constructor() {
    this.logo = 'assets/images/logo.svg';
    this.title = 'NgGIPHY';
    this.searchValue = '';
  }

  ngOnInit(): void {}

  handleSearchText() {
    this.onSearch.emit(this.searchValue);
  }
}
