import { Component } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imageUrl : SafeUrl;
  isMobile : Boolean;
  isTablet : Boolean;
  isDesktop : Boolean;


  constructor(private deviceService: DeviceDetectorService) {
    this.getDeviceInfo();
  }

  getDeviceInfo() : void {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktop = this.deviceService.isDesktop();
  }
  receiveImageData(event) : void {
    this.imageUrl = event;
  }
}
