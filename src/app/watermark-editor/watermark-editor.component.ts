import {Component, ElementRef, OnInit, AfterContentInit, ViewChild, AfterContentChecked} from '@angular/core';
import {Router} from "@angular/router";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'watermark-editor',
  templateUrl: './watermark-editor.component.html',
  styleUrls: ['./watermark-editor.component.css'],
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class WatermarkEditorComponent implements OnInit, AfterContentChecked  {
  imagePreview: string;
  // container: HTMLDivElement;

  @ViewChild(".items-container") container: ElementRef;

  constructor(private elem: ElementRef, private task: TaskService, private router: Router) {

  }

  ngOnInit() {
    if(!this.task.files.length)
      this.router.navigate(['/images']);
    this.task.firstImagePreview(2000, 1000)
      .then(preview => this.imagePreview = preview);
  }

  ngAfterContentChecked() {
    // this.container = this.elem.nativeElement.querySelector('.items-container');
    // console.log(this.container);
    // debugger;
    // return;
  }

  onResize() {

  }

}
