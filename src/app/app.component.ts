import {Component} from "@angular/core";
import {TaskService} from "./services/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private task: TaskService, private router: Router) {

  }
}
