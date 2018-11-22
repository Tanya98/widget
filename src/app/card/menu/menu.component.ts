import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  public items = [
    {
      type: 'hotel',
    },
    {
      type: 'fishing',
    },
    {
      type: 'tour',
    }
  ];

  @Output() public typeChanged: EventEmitter<any> = new EventEmitter();

  navClick(type) {
    this.typeChanged.emit(type);
  }
}
