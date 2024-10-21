import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contacts/contacts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrls: ['./edit-contact-modal.component.css'],
})
export class EditContactModalComponent {
  @Input() selectedContact?: Contact;
  @Input() isEditModalVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<Contact>();

  constructor(private toastr: ToastrService) {}

  // Function to handle saving the updated contact
  onUpdateContact() {
    if (this.selectedContact && this.isContactValid(this.selectedContact)) {
      this.update.emit(this.selectedContact); // Emit the updated contact to the parent
      this.closeModal(); // Close the modal after updating
      this.toastr.success('Changes saved!', 'Success', {
        positionClass: 'toast-bottom-right',
      });
    } else {
      console.error('Contact is invalid');
    }
  }

  closeModal() {
    this.isEditModalVisible = false;
    this.close.emit(); // Emit close event to parent
  }

  onCancel() {
    this.closeModal(); // Simply close the modal
  }

  private isContactValid(contact: Contact): boolean {
    return !!contact.name && !!contact.phone && !!contact.email; // Basic validation
  }
}
