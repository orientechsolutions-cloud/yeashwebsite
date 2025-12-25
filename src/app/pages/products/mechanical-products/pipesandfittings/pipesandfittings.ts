import { Component } from '@angular/core';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { Sidebar } from '../../../../components/sidebar/sidebar';

@Component({
  selector: 'app-pipesandfittings',
  imports: [PageBanner, Sidebar],
  templateUrl: './pipesandfittings.html',
  styleUrl: './pipesandfittings.scss',
})
export class Pipesandfittings {

}
