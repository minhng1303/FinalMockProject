import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/ArticleService/article.service';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  createArticleForm;
  constructor(
    private router: Router,
    private articleService: ArticleService,
    private auth: AuthService,

    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createArticleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required]],
    });
  }

  creatArticle(title: string, description: string, body: string) {
    this.articleService
      .createArticle(title, description, body)
      .toPromise()
      .then((res) => {
        console.log(res);
        this.router.navigate(['']);
      });
  }

  get(val) {
    return this.createArticleForm.controls['val'];
  }

  log() {
    console.log(this.createArticleForm);
  }
}
