import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoversService {
  constructor(private http: HttpClient) { }

  getCover(coverUrl: string) {
    return this.http.get(coverUrl, { responseType: 'blob' });
  }
}
