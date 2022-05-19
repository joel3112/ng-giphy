import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          marginTop: '0px'
        })
      ),
      state(
        'closed',
        style({
          marginTop: '-55px'
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')])
    ])
  ]
})
export class ToastComponent implements OnInit {
  @Input() message: string;
  @Input() opened: boolean;

  constructor(private toastService: ToastService) {
    this.opened = false;
    this.message = '';

    this.toastService.subscribeOpened().subscribe(({ message, opened }) => {
      console.log('toast', message, opened);
      this.message = message;
      this.opened = !!opened;
    });
  }

  ngOnInit(): void {}
}
