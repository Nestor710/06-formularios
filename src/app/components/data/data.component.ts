import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
  ]
})
export class DataComponent {

  forma:FormGroup;


  constructor() { 

    this.forma = new FormGroup({
      'nombre': new FormControl( '', [Validators.required,
                                      Validators.minLength(3)] ),

      'apellido': new FormControl( '', [Validators.required,
                                        Validators.minLength(3),
                                        this.norojas] ),
      
      'email': new FormControl( '', [Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                   ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.ExisteUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()                                   
    })

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noigual.bind( this.forma )
    ])

  }


  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);
    
    
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    )
  }

  norojas( controls: FormControl ):{ [s:string]:Boolean} {
    if (controls.value === 'rojas') {
      return {
        norojas:true
      }
    }
  }


  noigual( controls: FormControl ):{ [s:string]:Boolean} {

    let forma:any = this
    if (controls.value !== forma.controls['password1'].value ) {
      return {
        noiguales:true
      }
    }
    return null;
  }

  ExisteUsuario( control:FormControl ): Promise<any>|Observable<any>{
    let promesa = new Promise(  
      ( resolve, reject )=> {
        setTimeout( ()=> {
          if (control.value === 'strider') {
            resolve( {existe:true} )
          } else {
            resolve( null )
          }
        },2000 )
      }
     )

     return promesa;
  }

}
