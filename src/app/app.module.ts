import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactModalComponent } from './add-contact-modal/add-contact-modal.component';
import { FormsModule } from '@angular/forms';
import { EditContactModalComponent } from './edit-contact-modal/edit-contact-modal.component';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './shared/alert/alert.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactModalComponent,
    EditContactModalComponent,
    AlertComponent,
    CustomerInfoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
