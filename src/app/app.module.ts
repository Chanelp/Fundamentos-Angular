import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';

//Locale para PIPES
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES); // Registramos el LOCALE_ID de 'es'

//Módulo personalizado que exporta componentes de tipo lista
import { ListModule } from './modules/list/list.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';

//Importamos el modulo de HttpClient
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { FormularioComponent } from './components/form/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/form/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/form/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/form/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';

@NgModule({
  declarations: [ //Todo lo exportado aquí es visible a nivel de proyecto
    AppComponent,
    SaludoComponent,
    TaskComponent,
    TaskListComponent,
    HomePageComponent,
    TaskFormComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos nuestro módulo personalizado
    ListModule,
    //Importamos el módulo HttpClient para hacer peticiones http
    HttpClientModule,
    // Importamos el Reactive FormsModule para trabajar con formularios reactivos
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    // Registramos los locale de ES para que los PIPES salgan en español
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
