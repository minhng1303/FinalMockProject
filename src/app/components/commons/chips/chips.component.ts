import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  @Input('chipList') tagList: string[];
  @Output() showTagArticle = new EventEmitter()
  constructor() {}

  showTagByArticle() {
    this.showTagArticle.emit(this.tagList)
  }
}
