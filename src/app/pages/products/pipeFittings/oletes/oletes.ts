import { Component } from '@angular/core';
import { PageBanner } from '../../../../components/page-banner/page-banner';
import { Sidebar } from '../../../../components/sidebar/sidebar';

@Component({
  selector: 'app-oletes',
  imports: [PageBanner,Sidebar],
  templateUrl: './oletes.html',
  styleUrl: './oletes.scss',
})
export class Oletes {

}
