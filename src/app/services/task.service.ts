import {Injectable} from '@angular/core';

export function isFileSupported(file: File) {
  return file.name.endsWith('.jpeg') || file.name.endsWith('.jpg') || file.name.endsWith('.png')
    || file.name.endsWith('.gif');
}

export function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>((resolve) => {
    const img = document.createElement('img'),
      reader = new FileReader();

    reader.onloadend = function() {
      img.src = reader.result;
      resolve(img);
    };

    reader.readAsDataURL(file);
  });
}

export function resizeImage(img: HTMLImageElement, width: number, height: number): Promise<string> {
  return new Promise<string>((resolve) => {
    function onLoaded() {

      let imgWidth = width, imgHeight = img.height * width / img.width;
      if(imgHeight > height) {
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
}
