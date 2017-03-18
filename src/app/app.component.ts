import {Component} from '@angular/core';
import {TaskService} from "./services/task.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //noinspection JSUnusedLocalSymbols
  constructor(private task: TaskService, private location: Location) {

  }
}
