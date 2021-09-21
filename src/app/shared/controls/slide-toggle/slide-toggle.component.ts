import { Component, forwardRef, Input } from '@angular/core';
import { CheckboxControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SlideToggleComponent),
        multi: true
    }
  ]
})
export class SlideToggleComponent extends CheckboxControlValueAccessor {
  @Input() checkedLabelText!: string;
  @Input() uncheckedLabelText!: string;
  isChecked = true;
  isDisabled = false;

  writeValue(value: boolean): void {
    this.isChecked = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;   
  }

  toggle(): void {
    if (!this.isDisabled) {
      this.isChecked = !this.isChecked;
      this.onChange(this.isChecked);
    }
  }
}
