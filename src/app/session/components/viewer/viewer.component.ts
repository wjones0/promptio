import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Prompt } from '@models/prompt';

@Component({
  selector: 'pro-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input()
  public prompt: Prompt;

  @Input()
  public scrollPosY: number;

  @Output()
  public scrollMax = new EventEmitter<boolean>();

  @ViewChild('promptcontent') promptEl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    const maxHeight = this.promptEl.nativeElement.scrollHeight;

    if ((this.prompt) && (maxHeight !== 0) && (this.scrollPosY >= maxHeight)) {
      this.scrollMax.emit(true);
    } else {
      this.promptEl.nativeElement.scrollTo(0, this.scrollPosY);
    }
  }

}
