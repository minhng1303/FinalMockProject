import { Article } from './../../../../models/articles';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/ArticleService/article.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-my-article',
  templateUrl: './my-article.component.html',
  styleUrls: ['./my-article.component.scss'],
})
export class MyArticleComponent implements OnInit {
  myArticles: Article[];
  username = this.auth.currentUser.username;
  userImage = '';

  constructor(
    private articleService: ArticleService,
    private auth: AuthService,
    private router: Router,
    private user: UserService
  ) {}

  ngOnInit(): void {
    this.getImageUrl
    this.articleService.getArticleByAuthor(this.auth.currentUser.username).subscribe((res: any) => {
        this.myArticles = res.articles;
      });
  }

  goToMyArticle(article) {
    let mySlug = article.slug;
    this.router.navigate([`article/${mySlug}`]);
  }

  get getImageUrl() {
    this.user.getUser(this.username).subscribe((res: any) => {
      this.userImage = res.profile.image;
    });
    return this.userImage;
  }

  
}
