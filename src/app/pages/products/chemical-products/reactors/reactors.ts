import { Component, signal } from '@angular/core';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { Sidebar } from '../../../../components/sidebar/sidebar';
import { HeroCarousel } from '../../../../components/hero-carousel/hero-carousel';

@Component({
  selector: 'app-reactors',
  imports: [PageBanner, Sidebar, HeroCarousel],
  templateUrl: './reactors.html',
  styleUrl: './reactors.scss',
})
export class Reactors {
slides = signal<any[]>([
    { image: 'assets/images/product-image/reactors/reactor-1.png'},
      { image: 'assets/images/product-image/reactors/reactor-2.png'},
      { image: 'assets/images/product-image/reactors/reactor-3.png'}
  ]);
}
