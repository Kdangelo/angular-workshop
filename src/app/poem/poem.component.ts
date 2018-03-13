import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Verso } from '../verso';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  @Input() id:number;
  @Input() mostrarVersos:Boolean;
  @Output() onMostrar = new EventEmitter<any>();
  versos:Array<Verso> = [];
  constructor() { 
    let newVerso = new Verso();
    newVerso.nombreJugador = 'La computadora';
    newVerso.contenido = 'Cuando supe la noticia de que ya no me querías';
    this.versos.push(newVerso);
  }

  ngOnInit() {
  }

  onSubmit(verso:Verso) {
    this.versos.push(verso);
  }

  onMostrarClick(){
    this.onMostrar.emit({
      mostrar : !this.mostrarVersos,
      id : this.id
    )}
}
