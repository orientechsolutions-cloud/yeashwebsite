import { Component, signal } from '@angular/core';
import { HeroCarousel } from '../../../../components/hero-carousel/hero-carousel';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { Sidebar } from '../../../../components/sidebar/sidebar';

@Component({
  selector: 'app-mixer-and-blender',
  imports: [PageBanner, Sidebar, HeroCarousel],
  templateUrl: './mixer-and-blender.html',
  styleUrl: './mixer-and-blender.scss',
})
export class MixerAndBlender {
slides = signal<any[]>([
      { image: 'assets/images/product-image/mixer_blender/mixer_1.png'},
      { image: 'assets/images/product-image/mixer_blender/mixer_2.png'},
      { image: 'assets/images/product-image/mixer_blender/mixer_3.png'},
      { image: 'assets/images/product-image/mixer_blender/mixer_4.png'}
  ]);
}
