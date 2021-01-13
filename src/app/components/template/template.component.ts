import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent {

  constructor() { }

  guardar(){
    console.log('Llamado la función');
    
  }

}
