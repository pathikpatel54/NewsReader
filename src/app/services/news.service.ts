import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { News } from '../models/news';

const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
}

@Injectable()
export class NewsService {
  url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3041f7a19f0c4a8f89dde24e22ca4fda";

  constructor(private http: HttpClient) {

  }

  fetchNews(): Observable<News> {
    return this.http.get<News>(this.url);
  }

  categoryNews(q): Observable<News> {
    var urlCat = `${this.url}&category=${q}`;
    return this.http.get<News>(urlCat);
  }

  fetchSearch(q): Observable<News> {
    var urlSearch = `https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=3041f7a19f0c4a8f89dde24e22ca4fda&q=${q}`;
    return this.http.get<News>(urlSearch);
  }
}
