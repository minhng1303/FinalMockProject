import { ArticleService } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { ChipsComponent } from '../../commons/chips/chips.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Article;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticle().subscribe((res: any) => {
      this.articles = res.articles;
      console.log(this.articles);
    });
  }
}
