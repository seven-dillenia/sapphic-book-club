import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, of, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BooksClient, GenreModel, IGenreModel, IUpdateBookRequestModel, PublicBookModel, UpdateBookRequestModel, UpdateBooksResponseModel } from './api.v1.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  api: BooksClient;
  // _books$ = new Subject<PublicBookModel[]>();
  // _books$ = of([] as PublicBookModel[]);

  // updateObservable;

  // _books$ = new Observable<PublicBookModel[]>((observer) => {
  //   observer.next();
  //   observer.complete();

  //   this.updateObservable = (newValue) => {
  //     observer.next(newValue);
  //     observer.complete();
  //   }
  // });

  _books$: Observable<PublicBookModel[]>;

  constructor(private http: HttpClient) {
    this.api = new BooksClient(http, "https://localhost:5001");

    // this._books$.pipe(startWith([]));
  }

  
  public get books(): Observable<PublicBookModel[]> {
    return this._books$;
  }
  
  setBooks(value$: Observable<PublicBookModel[]>) {
    console.log("setting....")
    // this._books$.next()

    // this.updateObservable(value$);
    this._books$ = value$;
    // console.log(this._books$);
  }
  // public get books() : PublicBookModel[] {
  //   return this._books;
  // }
  



  getBooks(pageIndex: number, pageSize: number) {
    console.log("calling...")
    // const key = keywords == null ? '' : keywords
    // return this.api.getBooks(key, pageIndex, pageSize);
    const genres: IGenreModel = {genreName: "Science Fiction", id: 1}
    const result = this.api.getBooksByGenre([new GenreModel(genres)], pageIndex, pageSize);
    this.setBooks(result.pipe(map(x => x.books)));
  }
}
