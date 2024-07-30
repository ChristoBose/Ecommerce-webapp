import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',  loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'products/:id', loadComponent: () => import('./pages/home/view-product/view-product.component').then(m => m.ViewProductComponent)
  }
];
