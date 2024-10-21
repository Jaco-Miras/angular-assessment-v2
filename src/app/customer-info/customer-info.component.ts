import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css'],
})
export class CustomerInfoComponent {
  customerData = {
    firstName: 'Jay Contreras',
    emailAddress: 'kamikazeegod@gmail.com',
    contactNumber: '0917-123-4567',
  };
}
