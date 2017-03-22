import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-item',
  templateUrl: './text-item.component.html',
  styleUrls: ['./text-item.component.css']
})
export class TextItemComponent implements OnInit {

  x: number;
  y: number;
  scale: number;

  text: string;

  constructor() { }

  ngOnInit() {
  }

  onMouseDown(e: Event) {
    console.log(e);
  }

  onMouseUp(e: Event) {
    console.log(e);
  }

  onMouseMove(e: Event) {
    console.log(e);
  }
}
