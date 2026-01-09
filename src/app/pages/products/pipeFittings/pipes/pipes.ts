import { Component } from '@angular/core';
import { Sidebar } from '../../../../components/sidebar/sidebar';
import { PageBanner } from '../../../../components/page-banner/page-banner';

@Component({
  selector: 'app-pipes',
  imports: [Sidebar,PageBanner],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {

}
