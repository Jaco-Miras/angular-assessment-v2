import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() type: string = 'success';

  @Input() message: string = '';
  showSuccessAlert: any;
  showErrorAlert: any;

  constructor() {}
}
