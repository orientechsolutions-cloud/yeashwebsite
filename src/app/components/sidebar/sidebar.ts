import { Component, Input, signal } from '@angular/core';
import {
  MEGA_MENU_SECTIONS,
  MegaMenuSection,
} from '../../navigation-routes';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})

export class Sidebar {

  @Input() sidebarTitle: string = '';
  megaMenuSections: MegaMenuSection[] = MEGA_MENU_SECTIONS;
  sidebarOpen = signal(false);   // false = hidden

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }


}
