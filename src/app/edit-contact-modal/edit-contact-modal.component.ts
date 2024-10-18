import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrl: './edit-contact-modal.component.css',
})
export class EditContactModalComponent {
  newContact = {
    name: '',
    phone: '',
    email: '',
  };

  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

  addContact() {
    console.log('Contact added:', this.newContact);
    this.onCancel();
  }
}
