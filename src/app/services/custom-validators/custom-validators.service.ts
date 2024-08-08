import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidatorsService {
  alphanumericValidator() {
    return (control: AbstractControl) => {
      const regex = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)*$/;
      const valid = regex.test(control.value);
      return valid ? null : { alphanumeric: true };
    };
  }
}
