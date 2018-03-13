import { PoemComponent } from './poem/poem.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadaver Exquisito';
  poemas = [
    true,
    true
  ];
  onPoemMostrar(input) {
    this.poemas[input.id] = input.mostrar;
  }
}
