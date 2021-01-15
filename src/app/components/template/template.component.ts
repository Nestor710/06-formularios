import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(Form) {
      border: 2px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario:any = {
    nombre: null,
    apellido: null,
    correo: null
  }

  constructor() { }

  guardar( forma:NgForm ){
    console.log('formulario posteado');
    console.log('ngForm',forma);
    console.log('Valor', forma.value);
    console.log('Usuario', this.usuario);
    

    
    
  }

}
