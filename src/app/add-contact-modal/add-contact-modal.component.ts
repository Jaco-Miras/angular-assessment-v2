import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.css'],
})
export class AddContactModalComponent {
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

  //   clearForm() {
  //     this.newContact = { name: '', phone: '', email: '' }; // Reset form fields
  //   }
}
