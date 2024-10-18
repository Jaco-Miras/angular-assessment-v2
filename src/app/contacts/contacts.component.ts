import { Component } from '@angular/core';

interface Contact {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contacts: Contact[] = [
    {
      name: 'Jay Contreras',
      email: 'kamikazegegod@gmail.com',
      phone: '0917-123-4567',
    },
    {
      name: 'Jason Astete',
      email: 'jason_the_menace@gmail.com',
      phone: '0920-600-22-22',
    },
    {
      name: 'Mikki Jill',
      email: 'keyboardista@gmail.com',
      phone: '0920-600-22-22',
    },
    {
      name: 'Jose Luis Linao',
      email: 'kamikazeprince@gmail.com',
      phone: '0917-123-44-56',
    },
    {
      name: 'Allan Burdeos',
      email: 'allan_burdeos@gmail.com',
      phone: '0917-666-66-66',
    },
    {
      name: 'Jianelli Lubiano',
      email: 'kamikazeprincess@gmail.com',
      phone: '0917-888-77-77',
    },
    {
      name: 'Led Zeppelin Tuyay',
      email: 'led_zt@gmail.com',
      phone: '0917-444-12-34',
    },
    {
      name: 'Sep Rono',
      email: 'sep_of_typecast@gmail.com',
      phone: '0917-444-12-34',
    },
    {
      name: 'Mark Estacio',
      email: 'mark_estacio@gmail.com',
      phone: '0917-666-66-66',
    },
  ];

  isAddModalVisible: boolean = false;
  isEditModalVisible: boolean = false;

  viewMode: string = 'grid';

  setViewMode(mode: string) {
    this.viewMode = mode;
  }

  showAddContactModal() {
    this.isAddModalVisible = true;
  }

  closeAddContactModal() {
    this.isAddModalVisible = false;
  }

  onContactAdded(newContact: any) {
    this.contacts.push(newContact); // Add the new contact to the list
  }

  editContact(contact: Contact) {
    // Logic to edit the contact
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter((c) => c !== contact);
  }
}
