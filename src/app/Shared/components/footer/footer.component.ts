import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sbc-footer',
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.scss"]
})
export class FooterComponent implements OnInit {

  appVersion = environment.appVersion;
  constructor() { }

  ngOnInit(): void {
    console.log("version: ", this.appVersion);
    console.log("hello gay people!");
  }
}