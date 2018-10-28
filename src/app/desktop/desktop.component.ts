import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  @Output() imageDataEmitter = new EventEmitter<SafeUrl>();
  trigger: Subject<void> = new Subject<void>();
  webcamImage: WebcamImage = null;
  isCameraToggled : Boolean = false;
  errors: WebcamInitError[] = [];

  toggleCamera() : void {
    this.isCameraToggled = !this.isCameraToggled;
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.imageDataEmitter.emit(this.webcamImage.imageAsDataUrl);
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  constructor() { }

  ngOnInit() {
  }

}
