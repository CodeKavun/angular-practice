import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { DatePipe, NgForOf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [NgForOf, UpperCasePipe, DatePipe],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  news = [{id: 0, title: "", content: "", date: "", image: ""}]

  constructor (private newsService: NewsService) {}

  ngOnInit() {
    this.news = this.newsService.getNews();
  }
}
