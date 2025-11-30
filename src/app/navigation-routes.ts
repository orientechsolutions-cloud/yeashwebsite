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
  { image: 'assets/images/brochure-1.png', alt: 'Brochure 1' },
  { image: 'assets/images/brochure-2.png', alt: 'Brochure 2' },
];

// Mega menu sections
export const MEGA_MENU_SECTIONS: MegaMenuSection[] = [
  {
    title: 'Chemical Products',
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
      { label: 'Type-I', routerLink: '/valves' },
      { label: 'Type-IV', routerLink: '/pipes' },
    ],
  },
  {
    title: 'Mechanical Products',
    links: [
      { label: 'Valves', routerLink: '/valves' },
      { label: 'Pipes & Fittings', routerLink: '/pipes' },
      { label: 'Machinery Tools', routerLink: '/machines' },
    ],
  },
];
