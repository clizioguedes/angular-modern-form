import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorMessagePipe } from '../../../../pipes/form-error-message/form-error-message.pipe';
import { UserFormService } from '../../services/user-form.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormErrorMessagePipe],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  userFormService = inject(UserFormService);
  userForm = this.userFormService.form;

  isInvalidField(field: keyof typeof this.userForm.controls): boolean {
    return this.userFormService.isInvalidField(field);
  }
}
