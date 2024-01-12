import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, StoryFn } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

export default {
  title: 'My components/TextInput',
  component: TextInputComponent,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    label: { description: 'Label of component', control: 'text' },
    text: { description: 'Label of component', control: 'text' },
    placeholder: { description: 'Custom class of component', control: 'text' },
    class: {
      description: 'Label of component',
      options: [
        'mat-text-input-secondary',
        'mat-text-input-tertiary',
        'mat-text-input-quaternary',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: StoryFn<TextInputComponent> = (args: TextInputComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, MatFormFieldModule, MatInputModule],
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'name',
  text: 'flavio',
  placeholder: 'enter your name',
  class: 'mat-text-input-quaternary',
};
