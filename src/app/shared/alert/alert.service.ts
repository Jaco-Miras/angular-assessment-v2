import { Injectable } from '@angular/core';
import { ToastrService, ActiveToast } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string): ActiveToast<any> {
    return this.toastr.success(message, title, {
      timeOut: 1000,
      progressBar: true,
    });
  }

  showError(message: string, title: string): ActiveToast<any> {
    return this.toastr.error(message, title, {
      timeOut: 1000,
      progressBar: true,
    });
  }

  showInfo(message: string, title: string): ActiveToast<any> {
    return this.toastr.info(message, title, {
      timeOut: 1000,
      progressBar: true,
    });
  }

  showWarning(message: string, title: string): ActiveToast<any> {
    return this.toastr.warning(message, title, {
      timeOut: 1000,
      progressBar: true,
    });
  }
}
