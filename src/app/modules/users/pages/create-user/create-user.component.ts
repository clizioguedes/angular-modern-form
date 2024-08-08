import { Component, inject } from '@angular/core';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { UserFormService } from '../../services/user-form.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [UserFormComponent],
  providers: [UserFormService],
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  userFormService = inject(UserFormService);

  onSubmit() {
    console.log('User form submitted', this.userFormService.form);

    if (this.userFormService.form.invalid) {
      this.userFormService.validateAllFormFields(this.userFormService.form);
    }
  }
}
