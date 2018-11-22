import { Component, OnInit } from '@angular/core';
import { data$, IInfo } from '../data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public bg_image = 'assets/images/marina-bay-sands.jpg';
  public data$ = data$;
  public unsortedData: IInfo[] = [];
  public sortedByType: IInfo[] = [];
  public selected = {};
  public filterType = '';

  ngOnInit(): void {
    this.data$.subscribe((data) => {
      this.unsortedData = data;
      this.changeByType('hotel');
    });
  }

  changeByType(type: string): void {
    this.sortedByType = this.unsortedData.filter(function (item) {
      return item.type === type;
    });
    this.selected = this.sortedByType[0];
  }

  navClick(type) {
    this.changeByType(type);
  }

  clicked(card): void {
    this.selected = card;
  }
}


