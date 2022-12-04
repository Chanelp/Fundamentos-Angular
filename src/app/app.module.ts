import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';

//Módulo personalizado que exporta componentes de tipo lista
import { ListModule } from './modules/list/list.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';

//Importamos el modulo de HttpClient
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/form/login-form/login-form.component';

@NgModule({
  declarations: [ //Todo lo exportado aquí es visible a nivel de proyecto
    AppComponent,
    SaludoComponent,
    TaskComponent,
    TaskListComponent,
    HomePageComponent,
    TaskFormComponent,
    ListaContactosComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos nuestro módulo personalizado
    ListModule,
    //Importamos el módulo HttpClient para hacer peticiones http
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
