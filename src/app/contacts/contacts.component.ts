import { Component } from '@angular/core';
import { ContactService, Contact } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contacts: Contact[] = [];
  selectedContact?: Contact;
  isEditModalVisible: boolean = false;
  isAddModalVisible: boolean = false;
  isEditing: boolean = false;

  // Contact details (used for both adding and editing)
  newContact: Contact = { name: '', phone: '', email: '' };

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  // Load contacts on component initialization
  loadContacts() {
    this.contactService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }

  // Open modal for adding a new contact
  showAddContactModal() {
    this.isAddModalVisible = true;
    this.isEditing = false; // We are adding, not editing
    this.resetContactForm();
  }

  showEditContactModal(contact: Contact) {
    this.selectedContact = { ...contact }; // Copy the contact data to edit
    this.isEditModalVisible = true; // Open the modal
  }

  // Handle the updated contact from the modal
  handleUpdateContact(updatedContact: Contact) {
    this.contactService.updateContact(updatedContact).subscribe((response) => {
      const index = this.contacts.findIndex((c) => c.id === updatedContact.id);
      if (index !== -1) {
        this.contacts[index] = response; // Update the contact in the list
      }
    });
  }

  // Delete a contact
  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact.id!).subscribe(() => {
      this.contacts = this.contacts.filter((c) => c.id !== contact.id);
    });
  }

  // Reset the contact form
  resetContactForm() {
    this.newContact = { name: '', phone: '', email: '' };
  }

  // Close the modal and reset flags
  closeAddContactModal() {
    this.isAddModalVisible = false;
    this.isEditing = false;
  }

  closeEditModal() {
    this.isEditModalVisible = false;
  }

  // Utility to validate if the contact is valid before submission
  isContactValid(contact: Contact): boolean {
    return !!contact.name && !!contact.phone && !!contact.email;
  }

  // Set the view mode (grid or list)
  viewMode: string = 'grid';

  setViewMode(mode: string) {
    this.viewMode = mode;
  }
}
