import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  imageUrl : SafeUrl;

  @Output() imageDataEmitter = new EventEmitter<SafeUrl>();

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

  loadFile(event) : void {
    this.imageUrl = event.target.files[0] ? this.sanitize(URL.createObjectURL(event.target.files[0])) : null;
    this.imageDataEmitter.emit(this.imageUrl);
  }

  sanitize(url:string) : SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
