import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articles';
import { ArticleService } from 'src/app/services/ArticleService/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  slug: string;
  slugArticle;
  constructor(private activateRoute: ActivatedRoute, private articleService: ArticleService) { 
    this.activateRoute.params.subscribe(data => {
      this.articleService.getSlugArticle(data.slug).subscribe((res: any) => {        
        this.slugArticle = res
        // console.log(this.slugArticle.article.author.username);       
      })
    })
  }
  
  ngOnInit(): void {
   
  }
  
  get getAuthor() {
    return this.slugArticle.article.author.username;
  }

  get getImage() {
    return this.slugArticle.article.author.image;
  }

  get getCreatedTime() {
    return this.slugArticle.article.createdAt;
  } 

  getDetailArticle() {
    
  }


}
