import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ContactsComponent },
  { path: 'home/view/:id', component: CustomerInfoComponent },
  //   { path: '**', component: 404 , pathMatch: 'full' ,},
];
