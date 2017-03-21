import {Component} from '@angular/core';
import {TaskService} from '../services/task.service';
import {Router} from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

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

  constructor(private task: TaskService, private router: Router) {

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
    this.router.navigate(['/editor']);
  }

  onDragLeave(e: Event) {
    e.preventDefault();
    this.state = 'normal';
  }
}
