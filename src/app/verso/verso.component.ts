import { Component, OnInit, Input } from '@angular/core';
import { Verso } from '../verso';

@Component({
  selector: 'app-verso',
  templateUrl: './verso.component.html',
  styleUrls: ['./verso.component.css']
})
export class VersoComponent implements OnInit {
  @Input() verso:Verso;

  constructor() { }

  ngOnInit() {
  }

}
