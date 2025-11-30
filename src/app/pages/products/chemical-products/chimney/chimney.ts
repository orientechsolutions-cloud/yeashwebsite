import { Component, signal } from '@angular/core';
import { HeroCarousel } from '../../../../components/hero-carousel/hero-carousel';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { Sidebar } from '../../../../components/sidebar/sidebar';

@Component({
  selector: 'app-chimney',
  imports: [PageBanner, Sidebar, HeroCarousel],
  templateUrl: './chimney.html',
  styleUrl: './chimney.scss',
})
export class Chimney {
  slides = signal<any[]>([
    { image: 'assets/images/product-image/chimney/chimney-1.png' },
    { image: 'assets/images/product-image/chimney/chimney-2.png' },
    { image: 'assets/images/product-image/chimney/chimney-3.png' },
    { image: 'assets/images/product-image/chimney/chimney-4.png' }
  ]);
}
