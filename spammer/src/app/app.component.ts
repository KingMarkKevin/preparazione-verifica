import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>();
  title = 'spammer';
  spamma(inutile: HTMLInputElement, spam: HTMLInputElement): boolean {
    console.log(inutile.value + "-" + spam.value);
    let cont =Number(spam.value);
    for (let index =  0; index < cont; index++) {
      this.articles.push(index+1 + " " + inutile.value);
    }
    console.log(this.articles);
    return false;
  }
}
