import { Component, signal } from '@angular/core';
import { HeroCarousel } from '../../../../components/hero-carousel/hero-carousel';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { Sidebar } from '../../../../components/sidebar/sidebar';

@Component({
  selector: 'app-reboilers',
  imports: [PageBanner, Sidebar, HeroCarousel],
  templateUrl: './reboilers.html',
  styleUrl: './reboilers.scss',
})
export class Reboilers {
slides = signal<any[]>([
    { image: 'assets/images/product-image/reboilers/reboilers-1.png' },
    { image: 'assets/images/product-image/reboilers/reboilers-2.png' }
  ]);
}
