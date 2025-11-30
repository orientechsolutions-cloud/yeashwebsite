import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-banner',
  imports: [],
  templateUrl: './page-banner.html',
  styleUrl: './page-banner.scss',
})
export class PageBanner {
  @Input() pageTitle: string = '';
  @Input() imageUrl: string = '';
  
}
