import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() label: string = 'label';
  @Input() text: string = 'text';
  @Input() placeholder: string = 'placeholder';
  @Input() class: string = '';
}
