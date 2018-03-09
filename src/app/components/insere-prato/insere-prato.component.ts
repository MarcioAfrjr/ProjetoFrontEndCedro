import { Component, OnInit } from '@angular/core';
import {Prato} from '../../prato';
import {ListaPratoService} from '../../services/lista-prato.service';
import {PersistenciaService} from '../../services/persistencia.service'

@Component({
  selector: 'insere-prato',
  templateUrl: './insere-prato.component.html',
  styleUrls: ['./insere-prato.component.css']
})
export class InserePratoComponent implements OnInit {

  count = 1;
  teste = "n foi";
  objects;
  pratoAux: Prato={
    pratoId:0,
    name:"",
    price:0
  };
  PratoListAux:Array<Prato>;
  
  constructor(private plService: ListaPratoService, private persistService:PersistenciaService){
    this.PratoListAux = this.plService.pratoList;
  }

  public inserirPrato(){
    this.pratoAux.pratoId = this.count;
    this.PratoListAux.push(Object.assign({},this.pratoAux));
    this.count = this.count + 1;
    this.persistService.getPosts().subscribe((posts)=>{
      console.log(posts)
    });
  }

  ngOnInit() {
  }

}
