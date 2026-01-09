import { Component } from '@angular/core';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { Sidebar } from '../../../../components/sidebar/sidebar';

@Component({
  selector: 'app-screwed-fittings',
  imports: [PageBanner,Sidebar],
  templateUrl: './screwed-fittings.html',
  styleUrl: './screwed-fittings.scss',
})
export class ScrewedFittings {

}
