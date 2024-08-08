import { inject, Injectable } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CustomValidatorsService } from '../../../services/custom-validators/custom-validators.service';
import { FormUtilsService } from '../../../services/form-utils/form-utils.service';

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  private formBuilder = inject(NonNullableFormBuilder);
  private customValidators = inject(CustomValidatorsService);
  private formUtilsService = inject(FormUtilsService);

  form = this.formBuilder.group({
    name: [
      '',
      [Validators.required, this.customValidators.alphanumericValidator()],
    ],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  resetForm() {
    this.form.reset();
  }

  isInvalidField(field: keyof typeof this.form.controls): boolean {
    const isInvalid =
      this.form.controls[field].invalid && this.form.controls[field].touched;
    return !!isInvalid;
  }

  validateAllFormFields(formGroup: FormGroup) {
    this.formUtilsService.validateAllFormFields(formGroup);
  }
}
