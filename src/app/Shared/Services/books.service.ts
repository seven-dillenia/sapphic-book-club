import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooksClient, GenreModel, IGenreModel, IUpdateBookRequestModel, PublicBookModel, UpdateBookRequestModel, UpdateBooksResponseModel } from './api.v1.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  api: BooksClient;
  _books$: Observable<PublicBookModel[]>;

  
  public get books(): Observable<PublicBookModel[]> {
    return this._books$;
  }
  
  setBooks(value$: Observable<PublicBookModel[]>) {
    this._books$ = value$;
  }
  // public get books() : PublicBookModel[] {
  //   return this._books;
  // }
  

  constructor(private http: HttpClient) {
    this.api = new BooksClient(http, "https://localhost:5001");
  }

  getBooks(pageIndex: number, pageSize: number) {
    // const key = keywords == null ? '' : keywords
    // return this.api.getBooks(key, pageIndex, pageSize);
    const genres: IGenreModel = {genreName: "Science Fiction", id: 1}
    const result = this.api.getBooksByGenre([new GenreModel(genres)], pageIndex, pageSize);
    this.setBooks(result.pipe(map(x => x.books)));
    return result;
  }
}
