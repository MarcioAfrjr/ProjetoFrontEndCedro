import { Injectable } from '@angular/core';
import {Prato} from '../prato';

@Injectable()
export class ListaPratoService {

  pratoList:Array<Prato> = [];

  constructor() { }

}
