import { Injectable } from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormUtilsService {
  /**
   * Get an error message for a specific form field in a form group.
   * @param formGroup - The form group containing the field.
   * @param fieldName - The name of the field to get the error message for.
   * @returns The error message for the field.
   */
  getErrorMessage(formGroup: UntypedFormGroup, fieldName: string): string {
    const field = formGroup.get(fieldName) as UntypedFormControl;
    return this.getErrorMessageFromField(field);
  }

  /**
   * Get an error message for a form control.
   * @param field - The form control to get the error message for.
   * @returns The error message for the control.
   */
  getErrorMessageFromField(field: UntypedFormControl): string {
    const errorMessages: {
      [key: string]: (field: UntypedFormControl) => string;
    } = {
      required: () => 'Campo obrigatório',
      alphanumeric: () => 'Campo deve conter apenas letras e números',
    };

    const errorKeys = Object.keys(errorMessages);

    for (const key of errorKeys) {
      if (field?.hasError(key)) {
        return errorMessages[key](field);
      }
    }

    return field?.errors ? 'Campo inválido' : '';
  }

  validateAllFormFields(formGroup: UntypedFormGroup | UntypedFormArray) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof UntypedFormControl) {
        control.markAsTouched();
      } else if (
        control instanceof UntypedFormGroup ||
        control instanceof UntypedFormArray
      ) {
        control.markAsTouched({ onlySelf: true });
        this.validateAllFormFields(control);
      }
    });
  }
}
