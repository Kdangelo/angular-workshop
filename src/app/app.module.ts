import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PoemComponent } from './poem/poem.component';
import { VersoFormComponent } from './verso-form/verso-form.component';
import { VersoComponent } from './verso/verso.component';


@NgModule({
  declarations: [
    AppComponent,
    PoemComponent,
    VersoFormComponent,
    VersoComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
