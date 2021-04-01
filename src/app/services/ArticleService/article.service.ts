import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getArticle() {
    return this.http.get('https://conduit.productionready.io/api/articles');
  }

  getSlugArticle(slug) {
    return this.http.get(
      `https://conduit.productionready.io/api/articles/${slug}`
    );
  }

  createArticle(title, description, body) {
    return this.http.post(
      'https://conduit.productionready.io/api/articles',
      {
        title: title,
        description: description,
        body: body,
      },
      {
        headers: {
          Authorization: `Token ${this.auth.currentUser.token}`,
        },
      }
    );
  }

  getProfile(val) {
    return this.http.get(
      `https://conduit.productionready.io/api/profiles/${val}`
    );
  }

  // addLike() {
  //   return this.http.p('https://conduit.productionready.io/api/articles',)
  // }

  getArticleByTag(tag: string) {
    return this.http.get(
      'https://conduit.productionready.io/api/articles?tag=' + tag
    );
  }

  getArticleByAuthor(author: string) {
    return this.http.get(
      'https://conduit.productionready.io/api/articles?author=' + author
    );
  }

  getArticleByFav(username: string) {
    return this.http.get(
      'https://conduit.productionready.io/api/articles?favorited=' + username
    );
  }

  skipArticle(limit: number, skip: number) {
    return this.http.get(
      'https://conduit.productionready.io/api/articles?limit' + skip
    );
  }

  getSingleArticle(slug: string) {
    return this.http.get(
      'https://conduit.productionready.io/api/articles/:' + slug
    );
  }

  getCommentArticle(slug) {
    return this.http.get(
      'https://conduit.productionready.io/api/articles/' + slug + '/comments'
    );
  }

  addCommentArticle(slug, body: string) {
    return this.http.post(
      'https://conduit.productionready.io/api/articles/' + slug + '/comments', 
        {
          "comment": {
            "body": body
          }
        },  
    );
  }

  deleteCommentArticle(slug, id) {
    return this.http.delete(
      `https://conduit.productionready.io/api/articles/${slug}/comments/${id}`,
    );
  }

  // createArticle(
  //   title: string,
  //   description: string,
  //   body: string,
  //   tagList: Array<string>
  // ) {
  //   return this.http.post('https://conduit.productionready.io/api/articles', {
  //     title: title,
  //     description: description,
  //     body: body,
  //     tagList: tagList,
  //   });
  // }

  updateArticle(title: string, description: string, body: string) {
    return this.http.put(
      'https://conduit.productionready.io/api/articles/:slug',
      {
        article: {
          title: title,
          description: description,
          body: body,
        },
      }
    );
  }

  deleteArticle(slug) {
    return this.http.delete(
      `https://conduit.productionready.io/api/articles/${slug}`,
    );
  }

  addFavoriteArticle(slug) {
    return this.http.post(
      `https://conduit.productionready.io/api/articles/${slug}/favorite`,
      {
        
      }
    )
  }

  removeFavoriteArticle(slug) {
    return this.http.delete(
      `https://conduit.productionready.io/api/articles/${slug}/favorite`,
      {
        
      }
    )
  }

  getTag() {
    return this.http.get(
      'https://conduit.productionready.io/api/tags'
    );
  }

}
