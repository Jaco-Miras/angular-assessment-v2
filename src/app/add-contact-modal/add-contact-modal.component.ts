import { Component, Output, EventEmitter } from '@angular/core';
import { Contact, ContactService } from '../contacts/contacts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.css'],
})
export class AddContactModalComponent {
  contacts: Contact[] = [];

  isAddModalVisible: boolean = false;

  newContact: Contact = { name: '', phone: '', email: '' };

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService
  ) {}

  addContact() {
    if (
      this.newContact.name &&
      this.newContact.phone &&
      this.newContact.email
    ) {
      this.contactService.addContact(this.newContact).subscribe(
        (contact) => {
          this.contacts.push(contact); // Add contact to the list
          this.onCancel(); // Close the modal
          this.newContact = { name: '', phone: '', email: '' }; // Reset form

          // Show success toast after adding the contact
          this.toastr
            .success('Contact successfully added!', 'Success', {
              timeOut: 1000,
            })
            .onHidden.subscribe(() => {
              window.location.reload();
            });
        },
        (error) => {
          // Optionally handle error, e.g., show error toast
          this.toastr.error('Failed to add contact', 'Error');
        }
      );
    }
  }

  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

  closeAddContactModal() {
    this.isAddModalVisible = false;
  }

  //   clearForm() {
  //     this.newContact = { name: '', phone: '', email: '' }; // Reset form fields
  //   }
}
