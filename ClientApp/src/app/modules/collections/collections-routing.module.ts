import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionDashboardComponent } from './components/collection-dashboard/collection-dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CollectionComponent } from './components/collection/collection.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionDashboardComponent,
    children: [
      {
        path: 'collections/:category',
        component: CollectionComponent,
      },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'cart', component: CartComponent },
      // { path: 'krishna', component: KrishnaComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
