import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pro-role-selector',
  templateUrl: './role-selector.component.html',
  styleUrls: ['./role-selector.component.scss']
})
export class RoleSelectorComponent implements OnInit {

  @Output()
  public roleSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectRole(role: string) {
    this.roleSelected.emit(role);
  }

}
