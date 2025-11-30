import { Component, signal } from '@angular/core';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { HeroCarousel } from '../../../../components/hero-carousel/hero-carousel';
import { Sidebar } from '../../../../components/sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receiver-and-storage',
  imports: [PageBanner,HeroCarousel,Sidebar,CommonModule],
  templateUrl: './receiver-and-storage.html',
  styleUrl: './receiver-and-storage.scss',
})
export class ReceiverAndStorage {
  slides = signal<any[]>([
      { image: 'assets/images/product-image/receiver_storage/receiver_1.png'},
      { image: 'assets/images/product-image/receiver_storage/receiver_2.png'},
      { image: 'assets/images/product-image/receiver_storage/receiver_3.png'},
      { image: 'assets/images/product-image/receiver_storage/receiver_4.png'},
      { image: 'assets/images/product-image/receiver_storage/receiver_5.png'},
      { image: 'assets/images/product-image/receiver_storage/receiver_6.png'}
  ]);
}
