import { Component } from '@angular/core';
import { Contact, ContactService } from '../contacts/contacts.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css'],
})
export class CustomerInfoComponent {
  contacts: Contact | undefined;
  id: string = '';

  constructor(
    private contactService: ContactService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit() {
    this.loadContacts();
  }

  // Load contacts on component initialization
  loadContacts() {
    this.contactService.getContact(this.id).subscribe((data: Contact) => {
      this.contacts = data;
    });
  }

  // back button function
  goBack() {
    this.location.back();
  }
}
