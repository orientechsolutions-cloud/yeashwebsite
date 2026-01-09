import { Component } from '@angular/core';
import { Sidebar } from '../../../../components/sidebar/sidebar';
import { PageBanner } from '../../../../components/page-banner/page-banner';

@Component({
  selector: 'app-flanges',
  imports: [Sidebar,PageBanner],
  templateUrl: './flanges.html',
  styleUrl: './flanges.scss',
})
export class Flanges {

}
