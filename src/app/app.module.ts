import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ListaPratoService} from './services/lista-prato.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';


import { PratoListComponent } from './components/prato-list/prato-list.component';
import { InserePratoComponent } from './components/insere-prato/insere-prato.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { PersistenciaService } from './services/persistencia.service';


@NgModule({
  declarations: [
    AppComponent,
    PratoListComponent,
    InserePratoComponent,
    CabecalhoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ListaPratoService,PersistenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
