import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Location }                 from '@angular/common';
import {TaskService} from "../services/task.service";

@Component({
  selector: 'drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.css'],
  animations: [
    trigger('state', [
      state('normal', style({
        backgroundColor: '#fff'
      })),
      state('hot', style({
        backgroundColor: '#dcce3e'
      })),
      transition('normal => hot', animate('100ms ease-in')),
      transition('hot => normal', animate('100ms ease-out'))
    ])
  ]
})
export class DropZoneComponent {
  state = 'normal';

  constructor(private task: TaskService, private location: Location) {

  }

  onDragEnter(e: Event) {
    e.preventDefault();
    this.state = 'hot';
  }

  onDragOver(e: Event) {
    e.preventDefault();
  }

  onDrop(e: DragEvent) {
    e.preventDefault();
    this.state = 'normal';
    this.task.addImages(e.dataTransfer.files);
    this.location.go('editor');
  }

  onDragLeave(e: Event) {
    e.preventDefault();
    this.state = 'normal';
  }
}
