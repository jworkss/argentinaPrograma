import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  //Cuando hablamos de inyectar es siempre en el constructor
  constructor(private http: HttpClient) { }


  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }
}
