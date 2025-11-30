import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'about-us', loadComponent: () => import('./pages/aboutus/aboutus').then(m => m.Aboutus) },
    { path: 'contact-us', loadComponent: () => import('./pages/contactus/contactus').then(m => m.Contactus) },
    { path: 'products/chemical-products/reactors', loadComponent: () => import('./pages/products/chemical-products/reactors/reactors').then(m => m.Reactors) },
    { path: 'products/chemical-products/receiver-and-storage', loadComponent: () => import('./pages/products/chemical-products/receiver-and-storage/receiver-and-storage').then(m => m.ReceiverAndStorage) },
    { path: 'products/chemical-products/mixer-and-blender', loadComponent: () => import('./pages/products/chemical-products/mixer-and-blender/mixer-and-blender').then(m => m.MixerAndBlender) },
    { path: 'products/chemical-products/heatexchangers', loadComponent: () => import('./pages/products/chemical-products/heatexchangers/heatexchangers').then(m => m.Heatexchangers) },
    { path: 'products/chemical-products/condenser', loadComponent: () => import('./pages/products/chemical-products/condenser/condenser').then(m => m.Condenser) },
    { path: 'products/chemical-products/chimney', loadComponent: () => import('./pages/products/chemical-products/chimney/chimney').then(m => m.Chimney) },
    { path: 'products/chemical-products/distillationcolumns', loadComponent: () => import('./pages/products/chemical-products/distillationcolumns/distillationcolumns').then(m => m.Distillationcolumns) },
    { path: 'products/chemical-products/reboilers', loadComponent: () => import('./pages/products/chemical-products/reboilers/reboilers').then(m => m.Reboilers) },
    { path: 'products/chemical-products/centrifuges', loadComponent: () => import('./pages/products/chemical-products/centrifuges/centrifuges').then(m => m.Centrifuges) },

    { path: '**', redirectTo: '' },
];
