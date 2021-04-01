import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/articles';
import { ArticleService } from 'src/app/services/ArticleService/article.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { UserService } from 'src/app/services/UserService/user.service';
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
  username = this.auth.currentUser.username;
  userImage = '';
  slugArticle;
  constructor(
    private articleService: ArticleService,
    private auth: AuthService,
    private user: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getImageUrl;
  constructor(
    private articleService: ArticleService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.articleService
      .getArticleByFav(this.auth.currentUser.username)
      .subscribe((res: any) => {
        this.favoritedArticles = res.articles;
      });
  }

  get getImageUrl() {
    this.user.getUser(this.username).subscribe((res: any) => {
      this.userImage = res.profile.image;
    });
    return this.userImage;
  }

  goToArticle(favoritedArticle) {
    let slug = favoritedArticle.slug;

    this.router.navigate([`article/${slug}`]);
  }
    console.log(this.favoritedArticles);
      });
  }
}
