import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionDashboardComponent } from './components/collection-dashboard/collection-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { CollectionComponent } from './components/collection/collection.component';

@NgModule({
  declarations: [
    CollectionDashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    CartComponent,
    CollectionComponent,
  ],
  imports: [CommonModule, CollectionsRoutingModule],
})
export class CollectionsModule {}
