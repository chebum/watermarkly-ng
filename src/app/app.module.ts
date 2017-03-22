import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app-component/app.component";
import {DropZoneComponent} from "./drop-zone/drop-zone.component";
import {TaskService} from "./services/task.service";
import {WatermarkEditorComponent} from "./watermark-editor/watermark-editor.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TextItemComponent } from './text-item/text-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DropZoneComponent,
    WatermarkEditorComponent,
    TextItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'images',
        component: DropZoneComponent
      },
      {
        path: 'editor',
        component: WatermarkEditorComponent
      },
      {
        path: '',
        redirectTo: '/images',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
