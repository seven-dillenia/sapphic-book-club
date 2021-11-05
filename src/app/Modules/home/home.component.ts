import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PublicBookModel } from 'src/app/shared/services/api.v1.service';
import { SeoService } from 'src/app/shared/services/seo.service';
import { BooksService } from '../../shared/services/books.service';
import { DeviceDetectorService, DeviceType } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"]
})
export class HomeComponent implements OnInit {
  public books: PublicBookModel[] = [];
  public isLoading: boolean = true;
  private allcolours: string[] = [
    "#C6D57E",
    "#D57E7E",
    "#A2CDCD",
    "#FFE1AF",
    "#EB92BE",
    "#1DB9C3",
    "#7952B3",
    "#343A40",
    "#F55C47",
    "#926E6F",
    "#C15050",
    "#5EAAA8",
    "#65D6CE",
    "#D1C145",
    "#E9B0DF",
    "#31326F",
    "#EA6227",
    "#342EAD",
    "#18B0B0",
    "#54123B",
    "#FF7C7C",
    "#E9EA77",
    "#7FCD91",
    "#40BFC1",
    "#3F4D71",
    "#293462",
    "#FD7792"
  ];
  public skeletonColours: string[] = [];
  public isReloadBtnLoading: boolean = false;
  public isError: boolean = false;
  public deviceType: DeviceType;

  constructor(
    private seoService: SeoService,
    private route: ActivatedRoute,
    private bookService: BooksService,
    private deviceService: DeviceDetectorService,
    private snackbar: MatSnackBar) {
      const deviceInfo  = this.deviceService.getDeviceInfo();
      this.deviceType = deviceInfo.deviceType as DeviceType;
    }

  ngOnInit(): void {
    const { meta } = this.route.snapshot.data;
    this.seoService.updateTitle(meta.title);
    this.seoService.updateDescription(meta.description);
    this.seoService.updateKeywords(meta.keywords);


    this.skeletonColours = this.allcolours
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 12);
    this.loadBooks();
  }

  public counter(i: number): number[] {
    return new Array<number>(i);
  }

  public getMoreBooks() {
    this.isReloadBtnLoading = true;
    let body = document.getElementsByClassName('header__logo')[0];
    body.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    this.loadBooks();
  }

  public loadBooks() {
    this.isLoading = true;
    this.bookService.getBooks(1, 12);


    this.bookService.books.subscribe(
      ((data) => {
        this.books = data;
        this.isLoading = false;
        this.isReloadBtnLoading = false;
      }),
      (err => {
        console.log("errr", err);
        console.log("errr", err.status);
        this.snackbar.open("Sorry! We've bumped into an error :(", "Close");
      })
    )
  }
}

