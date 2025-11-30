import { Component } from '@angular/core';
import { PageBanner } from '../../components/page-banner/page-banner';
import { GetAQuote } from '../../components/get-a-quote/get-a-quote';

@Component({
  selector: 'app-contactus',
  imports: [PageBanner,GetAQuote],
  templateUrl: './contactus.html',
  styleUrl: './contactus.scss',
})
export class Contactus {

}
