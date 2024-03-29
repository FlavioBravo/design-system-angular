import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-sytem-angular';
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  items = [
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
  ];
}
