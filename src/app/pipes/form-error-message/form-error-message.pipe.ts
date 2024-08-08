import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormUtilsService } from '../../services/form-utils/form-utils.service';

@Pipe({
  name: 'formErrorMessage',
  standalone: true,
})
export class FormErrorMessagePipe implements PipeTransform {
  constructor(private formUtilsService: FormUtilsService) {}

  transform(form: FormGroup, fieldName: string): string | null {
    return form.touched && form.invalid
      ? this.formUtilsService.getErrorMessage(form, fieldName)
      : null;
  }
}
