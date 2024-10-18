import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactModalComponent } from './add-contact-modal/add-contact-modal.component';
import { FormsModule } from '@angular/forms';
import { EditContactModalComponent } from './edit-contact-modal/edit-contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactModalComponent,
    EditContactModalComponent,
  ],
  imports: [FormsModule, BrowserModule, MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
