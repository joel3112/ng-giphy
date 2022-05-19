import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() logo: string;
  @Input() title: string;
  @Input() searchValue: string;

  @Output() onSearch = new EventEmitter<string>();

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.logo = 'assets/images/logo.svg';
    this.title = 'NgGIPHY';
    this.searchValue = '';
    this.searchForm = this.fb.group({});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('searchValue')) {
      this.searchForm.patchValue({ query: this.searchValue });
    }
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: [this.searchValue, Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    this.searchValue = form.value.query;
    this.onSearch.emit(this.searchValue);
  }
}
