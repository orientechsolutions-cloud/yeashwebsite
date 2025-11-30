import { CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, Input, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-carousel',
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ✅ allows <swiper-container> & <swiper-slide>
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.scss',
})
export class HeroCarousel {
 @Input() slidesSource!: Signal<any[]> | any[];
 @Input() height: string = '';
  slides =computed<any[]>(() => {
    const src = this.slidesSource as any;
    // signals are functions in Angular; plain arrays are not functions
    if (typeof src === 'function') {
      // It's a Signal<Slide[]>
      return (src as Signal<any[]>)() ?? [];
    } else if (Array.isArray(src)) {
      return src as any[];
    } else {
      return [];
    }
  });

}
