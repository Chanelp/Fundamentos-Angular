import { Component, OnInit } from '@angular/core';

//Ejemplo formulario reactivo anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss'],
})
export class FormularioAnidadoComponent implements OnInit {
  miFormularioAnidado: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //Agrupación para teléfonos
    const telefonoFijo = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });

    const telefonoMovil = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });

    // Agrupación de un formulario que contiene dos agrupaciones
    this.miFormularioAnidado = this.formBuilder.group({
      nombre: '',
      telefonoFijo: telefonoFijo,
      telefonoMovil: telefonoMovil,
    });
  }
}
