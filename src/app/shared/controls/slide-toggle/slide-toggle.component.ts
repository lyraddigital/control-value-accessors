import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {
  @Input() checkedLabelText!: string;
  @Input() uncheckedLabelText!: string;
  isChecked = true;
  isDisabled = false;

  toggle(): void {
    if (!this.isDisabled) {
      this.isChecked = !this.isChecked;
    }
  }
}
