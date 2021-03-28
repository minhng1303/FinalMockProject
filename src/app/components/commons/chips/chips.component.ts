import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];
  constructor() {}

  // ngOnInit(): void {}

  // drop(event: CdkDragDrop<Vegetable[]>) {
  //   moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  // }
}
