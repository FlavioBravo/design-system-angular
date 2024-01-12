import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, StoryFn } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

export default {
  title: 'My components/Accordion',
  component: AccordionComponent,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    class: {
      description: 'Custom class of component',
      options: [
        'mat-accordion-secondary',
        'mat-accordion-tertiary',
        'mat-accordion-quaternary',
      ],
      control: { type: 'select' },
    },
    items: { description: 'Option List of component', control: 'object' },
  },
} as Meta;

const Template: StoryFn<AccordionComponent> = (args: AccordionComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, MatFormFieldModule, CdkAccordionModule],
  },
});

export const Primary = Template.bind({});
Primary.args = {
  class: 'mat-accordion-secondary',
  items: [
    {
      title: 'Item 1',
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?`,
    },
    {
      title: 'Item 2',
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?`,
    },
    {
      title: 'Item 3',
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?`,
    },
    {
      title: 'Item 4',
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?`,
    },
    {
      title: 'Item 5',
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
    excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis
    veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?`,
    },
  ],
};
