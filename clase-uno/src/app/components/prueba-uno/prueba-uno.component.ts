import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-uno',
  templateUrl: './prueba-uno.component.html',
  styleUrls: ['./prueba-uno.component.scss'],
})
export class PruebaUnoComponent {
  constructor() {}

  title = 'Lo que sea!!!!!';
  prueba = [
    { name: 'Uno', value: 1 },
    { name: 'Dos', value: 2 },
    { name: 'Tres', value: 3 },
    { name: 'Cuatro', value: 4 },
    { name: 'Cinco', value: 5 },
    { name: 'Seis', value: 6 },
    { name: 'Siete', value: 7 },
    { name: 'Ocho', value: 8 },
  ];
}
