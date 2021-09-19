import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SlideToggleComponent),
      multi: true,
    },
  ],
})
export class SlideToggleComponent implements ControlValueAccessor {
  @Input() checkedLabelText!: string;
  @Input() uncheckedLabelText!: string;
  isChecked = true;
  isDisabled = false;
  onChange!: (value: boolean) => void;

  writeValue(value: boolean): void {
    this.isChecked = value;
  }

  registerOnChange(onChange: (value: boolean) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: (value: boolean) => void): void {
    // We will not do anything to this control when onTouch event occurs.
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
