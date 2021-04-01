import { Article } from './../../../../models/articles';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/ArticleService/article.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-article',
  templateUrl: './my-article.component.html',
  styleUrls: ['./my-article.component.scss'],
})
export class MyArticleComponent implements OnInit {
  mySlugArticle: Article;
  myArticles: Article;
  constructor(
    private articleService: ArticleService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.articleService
      .getArticleByAuthor(this.auth.currentUser.username)
      .subscribe((res: any) => {
        this.myArticles = res.articles;
      });
  }

  goToMyArticle(myArticle) {
    let mySlugArticle = myArticle.slug;
    this.router.navigate([`article/${mySlugArticle}`]);
  }

  get getImageUrl() {
    return this.myArticles[0].author.image;
  }
}
