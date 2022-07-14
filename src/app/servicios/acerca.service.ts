import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { acerca } from '../model/acerca.model';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {
  URL = 'http://localhost:8080/acerca/';

  constructor(private http: HttpClient) {}
  public getAcerca(): Observable<acerca>{
    return this.http.get<acerca>(this.URL + 'traer/perfil')
  }
}
