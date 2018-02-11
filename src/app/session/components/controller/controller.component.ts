import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pro-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  @Output()
  public rateChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeRate(change: string) {
    this.rateChange.emit(change);
  }

}
