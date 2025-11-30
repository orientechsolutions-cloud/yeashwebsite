import { Component, signal } from '@angular/core';
import { HeroCarousel } from '../../../../components/hero-carousel/hero-carousel';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { Sidebar } from '../../../../components/sidebar/sidebar';

@Component({
  selector: 'app-distillationcolumns',
  imports: [PageBanner, Sidebar, HeroCarousel],
  templateUrl: './distillationcolumns.html',
  styleUrl: './distillationcolumns.scss',
})
export class Distillationcolumns {
slides = signal<any[]>([
    { image: 'assets/images/product-image/distillations/dist-1.png'},
      { image: 'assets/images/product-image/distillations/dist-2.png'}
  ]);
}
