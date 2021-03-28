import { ArticleService } from 'src/app/services/ArticleService/article.service'
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Article[];
  slugArticle: Article;
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.articleService.getArticle().subscribe((res: any) => {
      this.articles = res.articles;

    });
  }

  goToArticle(article) {    
    let slug = article.slug
    // this.articleService.getSlugArticle(slug).subscribe((res:any) => {
    //   this.slugArticle = res;
    //   console.log(res);
    // })
    this.router.navigate([`article/${slug}`])
  }
}
