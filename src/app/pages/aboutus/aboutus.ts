import { Component } from '@angular/core';
import { PageBanner } from '../../components/page-banner/page-banner';
import { AnimateOnScroll } from '../../Directives/animate-on-scroll';

@Component({
  selector: 'app-aboutus',
  imports: [PageBanner, AnimateOnScroll],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.scss',
})
export class Aboutus {

}
