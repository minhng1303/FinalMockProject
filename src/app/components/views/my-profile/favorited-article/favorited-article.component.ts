import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { registerUser } from 'src/app/models/registerUser';
import { ArticleService } from 'src/app/services/ArticleService/article.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-favorited-article',
  templateUrl: './favorited-article.component.html',
  styleUrls: ['./favorited-article.component.scss'],
})
export class FavoritedArticleComponent implements OnInit {
  favoritedArticles: Article[] = [];
  imageURL: string;
  user: registerUser;
  constructor(
    private articleService: ArticleService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.auth.currentUser;
    this.articleService
      .getArticleByFav(this.auth.currentUser.username)
      .subscribe((res: any) => {
        this.favoritedArticles = res.articles;
        console.log(this.favoritedArticles);
      });
  }

}
