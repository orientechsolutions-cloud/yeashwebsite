import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
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
    { path: 'products/pipeFittings/bwseamlessfittings', loadComponent: () => import('./pages/products/pipeFittings/bwseamlessfittings/bwseamlessfittings').then(m => m.Bwseamlessfittings) },
    { path: 'products/pipeFittings/socketweldandscrewed-fittings', loadComponent: () => import('./pages/products/pipeFittings/socketweldandscrewed-fittings/socketweldandscrewed-fittings').then(m => m.SocketweldandscrewedFittings) },
    { path: 'products/pipeFittings/pipes', loadComponent: () => import('./pages/products/pipeFittings/pipes/pipes').then(m => m.Pipes) },
    { path: 'products/pipeFittings/pipesandfittings', loadComponent: () => import('./pages/products/pipeFittings/pipesandfittings/pipesandfittings').then(m => m.Pipesandfittings) },

    { path: 'products/pipeFittings/screwedfittings', loadComponent: () => import('./pages/products/pipeFittings/screwed-fittings/screwed-fittings').then(m => m.ScrewedFittings) },
    { path: 'products/pipeFittings/olets', loadComponent: () => import('./pages/products/pipeFittings/oletes/oletes').then(m => m.Oletes) },


    { path: 'products/pipeFittings/flanges', loadComponent: () => import('./pages/products/pipeFittings/flanges/flanges').then(m => m.Flanges) },
    { path: 'products/cng-cascade/type1', loadComponent: () => import('./pages/products/cng-cascade/type1/type1').then(m => m.Type1) },
    { path: 'products/cng-cascade/type4', loadComponent: () => import('./pages/products/cng-cascade/type4/type4').then(m => m.Type4) },

    { path: '**', redirectTo: '' },
];
