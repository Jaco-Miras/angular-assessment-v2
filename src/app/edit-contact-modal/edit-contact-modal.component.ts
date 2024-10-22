import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contacts/contacts.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  contactForm!: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with empty values
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]], // Name field is required
      phone: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]], // Required 11-digit phone number
      email: ['', [Validators.required, Validators.email]], // Required valid email
    });

    this.onLoad();
  }

  onLoad() {
    this.contactForm.patchValue({
      name: this.selectedContact?.name,
      phone: this.selectedContact?.phone,
      email: this.selectedContact?.email,
    });
  }

  onUpdateContact() {
    if (this.contactForm.valid) {
      // Update selectedContact with the form values
      this.selectedContact = {
        ...this.selectedContact,
        name: this.contactForm.value.name,
        phone: this.contactForm.value.phone,
        email: this.contactForm.value.email,
      };

      // Emit the updated contact to the parent
      this.update.emit(this.selectedContact);

      // Close the modal and show success toast
      this.closeModal();
      this.toastr.success('Changes saved!', 'Success', {
        positionClass: 'toast-bottom-right',
      });
    } else {
      console.error('Form is invalid');
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
