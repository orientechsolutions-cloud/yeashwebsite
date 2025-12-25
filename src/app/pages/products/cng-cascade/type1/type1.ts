import { Component } from '@angular/core';
import { Sidebar } from '../../../../components/sidebar/sidebar';
import { PageBanner } from '../../../../components/page-banner/page-banner';

@Component({
  selector: 'app-type1',
  imports: [Sidebar, PageBanner],
  templateUrl: './type1.html',
  styleUrl: './type1.scss',
})
export class Type1 {

}
