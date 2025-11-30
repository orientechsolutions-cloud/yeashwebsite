import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { HeroCarousel } from "../../components/hero-carousel/hero-carousel";
import { CommonModule } from '@angular/common';
import { AnimateOnScroll } from '../../Directives/animate-on-scroll';
import { GetAQuote } from '../../components/get-a-quote/get-a-quote';

@Component({
  selector: 'app-home',
  imports: [HeroCarousel, CommonModule, GetAQuote, AnimateOnScroll],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
   slides = signal<any[]>([
      { showBtns:true, image: 'assets/images/hero-1.png', title: 'Over 40+ Years of Engineering & Fabrication Expertise', subtitle: 'Delivering precision-crafted steel structures and industrial fabrication solutions trusted across Maharashtra.' },
      { showBtns:true, image: 'assets/images/hero-2.png', title: 'Built on Quality. Strengthened by Trust.', subtitle: 'From design to installation, every project reflects our commitment to superior craftsmanship and durability.' },
      { showBtns:true, image: 'assets/images/hero-3.png', title: 'Industrial & Structural Fabrication Experts', subtitle: 'Custom Steel Fabrication for Every Industry.' },
      { showBtns:true, image: 'assets/images/hero-4.png', title: 'Engineering Strength. Building the Future.', subtitle: 'Yash Engineering Company — trusted for innovation, integrity, and excellence in steel fabrication.' }
  ]);

  
  
}
