import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

import { WebcamModule } from 'ngx-webcam';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MobileComponent } from './mobile/mobile.component';
import { DesktopComponent } from './desktop/desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    DesktopComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    MDBBootstrapModule.forRoot(),
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
