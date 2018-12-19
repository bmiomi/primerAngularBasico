import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//formularos

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Componente_1 } from './primercomponent/primer.component';
import { PruevaComponent } from './prueva/prueva.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],

  //componentes modulos
  declarations: [
    AppComponent,
    Componente_1,
    PruevaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
