import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

import { News } from '../../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];
  category: string = 'India';

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.fetchNews().subscribe((data) => {
      this.news = data.articles;
    });
  }
  onCategoryClick(category) {
    console.log('clicked');
    this.category = category;
    if (category !== 'India') {
      var q = this.category.toLowerCase();
      this.newsService.categoryNews(q).subscribe((data) => {
        this.news = data.articles
      });
    } else {
      this.newsService.fetchNews().subscribe((data) => {
        this.news = data.articles;
      });
    }
  }
  onSearchReceive(term) {
    this.newsService.fetchSearch(term).subscribe((data) => {
      this.news = data.articles;
    })
  }

}
