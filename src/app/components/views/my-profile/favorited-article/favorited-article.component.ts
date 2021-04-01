import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { ArticleService } from 'src/app/services/ArticleService/article.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-favorited-article',
  templateUrl: './favorited-article.component.html',
  styleUrls: ['./favorited-article.component.scss'],
})
export class FavoritedArticleComponent implements OnInit {
  favoritedArticles: Article[] = [];
  constructor(
    private articleService: ArticleService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.articleService
      .getArticleByFav(this.auth.currentUser.username)
      .subscribe((res: any) => {
        this.favoritedArticles = res.articles;
        console.log(this.favoritedArticles);
      });
  }
}
