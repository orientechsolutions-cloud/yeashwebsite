// nav.config.ts

export interface NavLink {
  label: string;
  routerLink: string;
}

export interface MegaMenuSection {
  title: string;
  links: NavLink[];
}

export interface CatalogueItem {
  image: string;
  alt: string;
  urlLink: string;
}

// Top bar items (Home, About, Contact, etc.)
export const TOP_NAV_LINKS: NavLink[] = [
  { label: 'Home', routerLink: '/' },
  { label: 'About Us', routerLink: '/about-us' },
  { label: 'Contact Us', routerLink: '/contact-us' },
  { label: 'Get A Quote', routerLink: '/quote' },
];

// Catalogue images
export const CATALOGUE_ITEMS: CatalogueItem[] = [
  { image: 'assets/images/brochure-1.png', alt: 'Brochure 1', urlLink: 'assets/pdf/Yas-Engineering-Catloue-1.pdf' },
  { image: 'assets/images/brochure-2.png', alt: 'Brochure 2', urlLink: 'assets/pdf/Yas-Engineering-Catloue-2.pdf'  },
];

// Mega menu sections
export const MEGA_MENU_SECTIONS: MegaMenuSection[] = [
  {
    title: 'Chemical Equipment',
    links: [
      { label: 'Reactors', routerLink: '/products/chemical-products/reactors' },
      { label: 'Receiver & Storage tanks', routerLink: '/products/chemical-products/receiver-and-storage' },
      { label: 'Mixer & Blender', routerLink: '/products/chemical-products/mixer-and-blender' },
      { label: 'Heat Exchangers & Condenser', routerLink: '/products/chemical-products/heatexchangers' },
      // { label: 'Condenser', routerLink: '/products/chemical-products/condenser' },
      { label: 'Chimney', routerLink: '/products/chemical-products/chimney' },
      { label: 'Distillation columns', routerLink: '/products/chemical-products/distillationcolumns' },
      { label: 'Reboilers', routerLink: '/products/chemical-products/reboilers' },
      // { label: 'Centrifuges', routerLink: '/products/chemical-products/centrifuges' },
    ],
  },
  {
    title: 'CNG casacde',
    links: [
      { label: 'Type-I', routerLink: '/products/cng-cascade/type1' },
      { label: 'Type-IV', routerLink: '/products/cng-cascade/type4' },
    ],
  },
  {
    title: 'Pipes & Fittings',
    links: [
      // { label: 'Valves', routerLink: '/valves' },
      { label: 'BW Seamless & Welded Fittings', routerLink: '/products/pipeFittings/bwseamlessfittings' },
      { label: 'Socket Weld Fittings', routerLink: '/products/pipeFittings/socketweldandscrewed-fittings' },
      { label: 'Pipes', routerLink: '/products/pipeFittings/pipes' },
      { label: 'Flanges', routerLink: '/products/pipeFittings/flanges' },
      { label: 'Screwed Fittings', routerLink: '/products/pipeFittings/screwedfittings' },
      { label: 'Olets', routerLink: '/products/pipeFittings/olets' },
      { label: 'Fittings', routerLink: '/products/pipeFittings/pipesandfittings' },

      // { label: 'Machinery Tools', routerLink: '/machines' },
    ],
  },
];
