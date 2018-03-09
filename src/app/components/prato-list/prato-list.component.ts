import { Component, OnInit } from '@angular/core';
import {Prato} from '../../prato';
import {ListaPratoService} from '../../services/lista-prato.service';

@Component({
  selector: 'prato-list',
  templateUrl: './prato-list.component.html',
  styleUrls: ['./prato-list.component.css']
})
export class PratoListComponent implements OnInit {

  PratoList:Array<Prato>;
  
    constructor(private plService: ListaPratoService){
      this.PratoList = plService.pratoList;
    }

  ngOnInit() {
  }

}

