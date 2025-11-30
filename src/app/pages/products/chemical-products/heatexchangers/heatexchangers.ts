import { Component, signal } from '@angular/core';
import { HeroCarousel } from '../../../../components/hero-carousel/hero-carousel';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { Sidebar } from '../../../../components/sidebar/sidebar';

@Component({
  selector: 'app-heatexchangers',
  imports: [PageBanner, Sidebar, HeroCarousel],
  templateUrl: './heatexchangers.html',
  styleUrl: './heatexchangers.scss',
})
export class Heatexchangers {
  slides = signal<any[]>([
    { image: 'assets/images/product-image/heatexchangers_condensors/heat_1.png' },
    { image: 'assets/images/product-image/heatexchangers_condensors/heat_2.png' },
    { image: 'assets/images/product-image/heatexchangers_condensors/heat_3.png' }
  ]);
}
