import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() checkedLabelText!: string;
  @Input() uncheckedLabelText!: string;
  isChecked = false;

  emitSwitchChanged(): void {
    this.isChecked = !this.isChecked;
  }
}
