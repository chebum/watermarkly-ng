import {Injectable} from '@angular/core';
import {reject} from "../utils";
import { environment } from '../../environments/environment';

export function isFileSupported(file: File) {
  return file.name.endsWith('.jpeg') || file.name.endsWith('.jpg') || file.name.endsWith('.png')
    || file.name.endsWith('.gif');
}

export function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>((resolve) => {
    const img = document.createElement('img');

    if(img.complete)
      resolve(img);
    else
      img.addEventListener("load", () => resolve(img));

    if(file["url"]) {
      img.src = file["url"];
    } else {
      const reader = new FileReader();
      reader.onloadend = () => img.src = reader.result;
      reader.readAsDataURL(file);
    }
  });
}

export function resizeImage(img: HTMLImageElement, width: number, height: number): Promise<string> {
  return new Promise<string>((resolve) => {
    function onLoaded() {
      let imgWidth = width, imgHeight = img.height * width / img.width;

      if(img.width < width && img.height < height) {
        imgWidth = img.width;
        imgHeight = img.height;
      } else if(imgHeight > height) {
        imgHeight = height;
        imgWidth = img.width * height / img.height;
      }

      /// step 1 - resize to 50%
      const oc = document.createElement('canvas'),
        ctx = oc.getContext('2d');

      oc.width = imgWidth;
      oc.height = imgHeight;
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight);

      resolve(oc.toDataURL('image/bmp', 1.0));
    }

    if(img.complete)
      onLoaded();
    else
      img.addEventListener("load", onLoaded);
  });
}

export function imagePreview(file: File): Promise<string> {
  return loadImage(file)
    .then(img => resizeImage(img, 180, 180));
}

@Injectable()
export class TaskService {
  files: File[];
  // previews: string[];

  constructor() {
    this.files = [];
    // this.previews = [];
    if (!environment.production) {
      this.files.push(<any>{url: '/assets/debug.jpg'});
    }
  }

  //noinspection JSUnusedGlobalSymbols
  get imageCount() { return this.files.length; }

  //noinspection JSUnusedGlobalSymbols
  clear() {
    this.files.splice(0);
  }

  addImages(files: FileList) {
    for(let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if(isFileSupported(file)) {
        this.files.push(file);
        // this.previews.push("");
        // imagePreview(file)
        //   .then(preview => {
        //     let index = this.files.indexOf(file);
        //     if(index >= 0) {
        //       this.previews[index] = preview;
        //     }
        //   });
      }
    }
  }

  firstImagePreview(width: number, height: number): Promise<string> {
    if(!this.files.length)
      return reject('Files not selected');
    return loadImage(this.files[0])
      .then(img => resizeImage(img, width, height));
  }
}

export class TextItem {
  x: number;
  y: number;
  scale: number;

  text: string;
}
