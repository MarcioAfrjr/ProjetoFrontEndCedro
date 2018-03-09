import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersistenciaService {

  constructor(public http:Http) 
  {
    console.log('Data asadase co..');
  }

  public getPosts(){
    return this.http.get('http://localhost:50713/Prato/ObjetoJson')
      .map(res=>res.json());
  }
}
