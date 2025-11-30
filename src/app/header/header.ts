import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  TOP_NAV_LINKS,
  MEGA_MENU_SECTIONS,
  CATALOGUE_ITEMS,
  MegaMenuSection,
  NavLink,
  CatalogueItem,
} from '../navigation-routes';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,          // ✅ REQUIRED
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  isMegaMenuOpen = false;
  isMainMenuOpen = false;
  isMobile = false;

  // imported data
  topNavLinks: NavLink[] = TOP_NAV_LINKS;
  megaMenuSections: MegaMenuSection[] = MEGA_MENU_SECTIONS;
  catalogueItems: CatalogueItem[] = CATALOGUE_ITEMS;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 992; // Bootstrap lg breakpoint
    if (!this.isMobile) {
      this.isMainMenuOpen = true;
    }
  }

  showMenu() {
    if (!this.isMobile) this.isMegaMenuOpen = true;
  }

  hideMenu() {
    if (!this.isMobile) this.isMegaMenuOpen = false;
  }

  toggleMegaMenu() {
    if (this.isMobile) this.isMegaMenuOpen = !this.isMegaMenuOpen;
  }
  
  toggleMainMenu() {
    this.isMainMenuOpen = !this.isMainMenuOpen; 
  }
}
