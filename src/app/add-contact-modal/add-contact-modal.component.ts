import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Contact, ContactService } from '../contacts/contacts.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.css'],
})
export class AddContactModalComponent {
  @Output() add = new EventEmitter<Contact>();
  contacts: Contact[] = [];

  isAddModalVisible: boolean = false;

  showSuccessAlert: boolean | undefined;
  showErrorAlert: boolean | undefined;
  contactForm!: FormGroup;

  newContact: Contact = { name: '', phone: '', email: '' };

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      // Check if the form is valid
      const contact: Contact = this.contactForm.value; // Get the contact data from the form
      this.contactService.addContact(contact).subscribe((addedContact) => {
        this.add.emit(addedContact);
        this.onCancel();
        this.contactForm.reset(); // Reset the form after submission
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

  //   clearForm() {
  //     this.newContact = { name: '', phone: '', email: '' }; // Reset form fields
  //   }
}
