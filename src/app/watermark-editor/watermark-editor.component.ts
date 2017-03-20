import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'watermark-editor',
  templateUrl: './watermark-editor.component.html',
  styleUrls: ['./watermark-editor.component.css']
})
export class WatermarkEditorComponent implements OnInit {
  imagePreview;

  constructor(private task: TaskService, private router: Router) { }

  ngOnInit() {
    if(!this.task.files.length)
      this.router.navigate(['/images']);
    this.task.firstImagePreview(2000, 1000)
      .then(preview => this.imagePreview = preview)
  }

}
