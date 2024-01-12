import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, StoryFn } from '@storybook/angular';
import { SelectComponent } from './select.component';

export default {
  title: 'My components/Select',
  component: SelectComponent,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    label: { description: 'Label of component', control: 'text' },
    options: { description: 'Option List of component', control: 'object' },
    class: {
      description: 'Custom class of component',
      options: [
        'mat-select-secondary',
        'mat-select-tertiary',
        'mat-select-quaternary',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: StoryFn<SelectComponent> = (args: SelectComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, MatFormFieldModule, MatSelectModule],
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Favorite food',
  options: [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ],
  class: 'mat-select-tertiary'
};
