import { Component } from '@angular/core';
import {
  TOP_NAV_LINKS,
  MEGA_MENU_SECTIONS,
  MegaMenuSection,
  NavLink
} from '../navigation-routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  imports: [RouterModule,CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  topNavLinks: NavLink[] = TOP_NAV_LINKS;
  megaMenuSections: MegaMenuSection[] = MEGA_MENU_SECTIONS;
}
