import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1 class="title">{{title}}</h1>`,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  title ="Main title"
}
