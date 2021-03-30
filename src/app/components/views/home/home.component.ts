import { ArticleService } from 'src/app/services/ArticleService/article.service'
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Article[];
  slugArticle: Article;
  chipList;
  isFavorited: boolean = false;
  constructor(private articleService: ArticleService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.articleService.getArticle().subscribe((res: any) => {
      this.articles = res.articles;
    });
    this.articleService.getTag().subscribe((res: any) => {
      this.chipList = res.tags;
    })
  }

  goToArticle(article) {    
    let slug = article.slug
    this.router.navigate([`article/${slug}`])
  }

  showTagArticle() {
    
  }

  addFavorite(article) {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/','login']);
      return;
    }
    // console.log(article);
    this.articleService.addFavoriteArticle(article.slug).subscribe(res => {
      this.isFavorited = true;
      this.articleService.getArticle().subscribe((res: any) => {
        this.articles = res.articles;
      });
    })
  }

  removeFavorite(article) {
    this.articleService.removeFavoriteArticle(article.slug).subscribe(res => {
      // console.log(res);
      this.isFavorited = false;
      this.articleService.getArticle().subscribe((res: any) => {
        this.articles = res.articles;
      });
    })
  }
}
