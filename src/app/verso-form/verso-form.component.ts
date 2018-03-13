import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Verso } from '../verso';

@Component({
  selector: 'app-verso-form',
  templateUrl: './verso-form.component.html',
  styleUrls: ['./verso-form.component.css']
})
export class VersoFormComponent implements OnInit {
  @Input() verso:Verso = new Verso;
  @Output() submit = new EventEmitter<Verso>()
  versoForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.createForm();
  }
    
  ngOnInit() {
  }

  ngOnChanges() {
    
  }
  onAgregarVerso() {
    if(this.versoForm.valid){
      let newVerso = new Verso();
      newVerso.nombreJugador = this.verso.nombreJugador;
      newVerso.contenido = this.verso.contenido;
      this.submit.emit(newVerso);
      this.versoForm.reset();
    }
  }

  createForm(){
    this.versoForm = this.fb.group({
      jugador : ['', [Validators.required, Validators.minLength(4)]],
      contenido : [this.verso.contenido],
    });

    this.versoForm.valueChanges.subscribe(() =>{
      this.verso.nombreJugador = this.versoForm.value.jugador;
      this.verso.contenido = this.versoForm.value.contenido;
    });
    // this.versoForm.patchValue({
    //   jugador : this.verso.nombreJugador,
    //   contenido : this.verso.contenido
    // })
  }
}
