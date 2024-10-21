import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Contact, ContactService } from '../contacts/contacts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.css'],
})
export class AddContactModalComponent {
  @Output() add = new EventEmitter<Contact>();
  contacts: Contact[] = [];

  isAddModalVisible: boolean = false;

  newContact: Contact = { name: '', phone: '', email: '' };
  showSuccessAlert: boolean | undefined;
  showErrorAlert: boolean | undefined;

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
      this.contactService.addContact(this.newContact).subscribe((contact) => {
        this.add.emit(contact);
        this.onCancel();
        this.newContact = { name: '', phone: '', email: '' };
        this.toastr.success('Contact added successfully!', 'Success', {
          positionClass: 'toast-bottom-right',
        });
      });
    }
  }

  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

  closeAddContactModal() {
    this.isAddModalVisible = false;
  }

  formatPhone(event: any): void {
    let input = event.target.value.replace(/\D/g, ''); // Remove all non-numeric characters
    if (input.length > 11) input = input.substring(0, 11); // Restrict to 11 digits

    // Format the number as 0000-000-0000
    if (input.length > 4 && input.length <= 7) {
      input = `${input.slice(0, 4)}-${input.slice(4)}`;
    } else if (input.length > 7) {
      input = `${input.slice(0, 4)}-${input.slice(4, 7)}-${input.slice(7)}`;
    }

    // Set the formatted value back to the input field and the model
    event.target.value = input;
    this.newContact.phone = input;
  }

  //   clearForm() {
  //     this.newContact = { name: '', phone: '', email: '' }; // Reset form fields
  //   }
}
